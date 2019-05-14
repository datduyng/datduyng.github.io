---
layout: post
title: People Counting and Localisation With Deep learning
subtitle: Leveraging Convolution neural network to count objects
feature-img: "https://user-images.githubusercontent.com/35666615/57591863-3cf6d980-74f9-11e9-8911-2dea4d5dbab3.png"
thumbnail: "https://user-images.githubusercontent.com/35666615/57591863-3cf6d980-74f9-11e9-8911-2dea4d5dbab3.png"
tags: [Deep Learning, Pytorch, Object Counting, Object Localisation]
---

## Introduction
Deep learning has gotten attention in many research field ranging from academic research to industrial research. Namely example are masked RCNN and YOLO object detection algorithm. These object detection has been develop to help solve many problem such as [autonomous driving](http://openaccess.thecvf.com/content_ICCV_2017_workshops/papers/w3/Lin_Fast_Vehicle_Detector_ICCV_2017_paper.pdf), object counting and pose estimation.

In case of public services, deep learning leveraged solution to many problem such as object(people or cars) counting and violence detection. Today, I would like to share an interesting solution to object counting. I ran across and gain interest in object counting while working on an academic research related to fruits and wheat yield estimation in algricultural. 

## Why is deep learning suitable? Are there better ways?
Of course there are better way. Counting taskes are challenging with image processing. In short, Image processing are processing images in fix sequence of task. Such an algorithm can work in few case but make it hard to scale on larger scale.

## Why is people counting important?
Number of people in public places such as park or mall are important to analyze. Keeping number of head count help business keep amount of profit running at a public location. In case of security, this help keep number of people going in and out of a public services location. 

Today, we are going to analyze on mall security camera images dataset. Most important is to keep the count and to localise people in the camera. 

Let's get started 

## Table of Content

<ol type="I">
	<li>Dataset and Data Preprocessing
		<ol type="A">
			<li>Dataset</li>
			<li>Gaussian Activation Map</li>
			<li>Data Preprocessing</li>
		</ol>
	</li>
	<li>Understanding the Architecture</li>
	<li>Understanding the training process</li>
	<li>Model evaluation</li>
	<li>Code & detail implementation</li>
</ol>

## I. Dataset and Data Preprocessing
### A. Dataset
In this work, we are going to solve object counting on a sparse crowd counting, Mall Dataset. 

Dataset link: [http://personal.ie.cuhk.edu.hk/~ccloy/downloads_mall_dataset.html](http://personal.ie.cuhk.edu.hk/~ccloy/downloads_mall_dataset.html)

Important things that we will need for our work from the dataset zip are frames folder with frames images in jpeg format, and ground truth labels in `.mat` format. Ground truth label are collect as a array of **(x, y)** coordinate stored in a matlab table. `scipy.io.loadmat` will be our good friend to load `.mat` file. 

```
	mall_dataset(dataset unzipped folder)
		|-- frames
		|-- mall_gt.mat
		|--....
```

Figure below shown the visualization of a few image + ground truth label from the dataset. 


![PC_sample_image_gt03](https://user-images.githubusercontent.com/35666615/57588278-4d965800-74d7-11e9-89eb-9da9247f87d4.PNG)            |  ![PC_sample_image_gt04](https://user-images.githubusercontent.com/35666615/57588279-4d965800-74d7-11e9-9b22-ab1aced62aed.PNG)
:-------------------------:|:-------------------------:
![PC_sample_image_gt02](https://user-images.githubusercontent.com/35666615/57588191-520e4100-74d6-11e9-8d3a-e48df409a77d.PNG)  |  ![PC_sample_image_gt01](https://user-images.githubusercontent.com/35666615/57588193-52a6d780-74d6-11e9-9a9a-e6dc752df5f9.PNG)
<center> Figure I.A show example of images with processed label from Mall dataset</center>




**Note**: Feel free to use all of the frame as part of training and test dataset. In this work, I will only use a small subset of 200 frame for training and 50 frames for testing. 

### B. Gaussian Activation Map(GAM)
In case of density ground truth labeling, we are treating each head count as an delta function $$\delta(x - x_i)$$ in an image.

For G labeled cell in an image, the discrete density map can be represent as follows:
$$
H(x) = \sum_{i=1}^{G} \delta(x-x_i)
$$

To convert the discrete delta map to a continuous density map distribution, we may convolve function $H(x)$ with a gaussian filter denoted as
$$
F(x) = H(x) \circledast G_{\sigma}(x)
$$

However, density function assume that these discrete point are independent sample in the images with out range of gaussian kernel size. Therefore, for each head $$x_i$$ in a given image, we compute the average distance to it k nearest neighbor denoted as $$d_{average} = \frac{1}{k}\sum_{j=1}^{k}d_{ij}$$ 

To estimate the crowd density around point $x_i$ we may convolve with a gaussian kernel with variance $$\sigma$$ proportional to $$d_{average}$$ and set $$\beta$$ as the initial variance denoted as 

$$
F(x) = H(x) \circledast G_{\sigma_i}(x), \text{where } \sigma_i = \beta d_{average} 
$$

### C. Data preprocessing
#### Get mean and standard deviation of dataset
Regression Convolution networks are challenging to optimize. One main reason is the likely of exploding gradient during training. Due to hardware limitation, Batch normalization is not used in this work due to the batch size dependencies of batch norm layer. Since batch norm is not applied the risks of gradient explosion or learning rate tuning were closely examined. One straight forward methods, that help solve this problem partially is to normalize the dataset on each input channel seperately using [Z-normalization](https://jmotif.github.io/sax-vsm_site/morea/algorithm/znorm.html).

#### Creating Gaussian Activation Map for input images using ground truth labels
We are going to create GAMs corresponding to each input images.  Intuitively, GAMs act as a density map that our model will try to predict in a **lower** sampling size. Low sampling size mean that our model output density map will be smaller than these GAM that we generating. Therefore, we will resize these GAM using bilinear downsampling while training which will be dicuss in more detail in later section. Sample of GAM map generated are shown as follows

<center>
	<img src="https://user-images.githubusercontent.com/35666615/57588461-21c8a180-74da-11e9-8aaa-97726920e7fd.PNG">
	<p>Figure I.C Sample of image with ground truth(left) and gerated Gaussian Activation Map(right)</p>
</center>

An example of a more dense crowd with GAM is shown as follow

<center>
	<img src="https://user-images.githubusercontent.com/35666615/57588532-378a9680-74db-11e9-8fef-aa1d41a10596.PNG">
	<p>Figure I.C Sample of image with ground truth(left) and gerated Gaussian Activation Map(right). Source: <a href="https://github.com/desenzhou/ShanghaiTechDataset">ShanghaiTech Dataset</a></p>
</center>


## II.  Understanding the Architecture

<center>
	<img width="450" height="350" src="https://user-images.githubusercontent.com/35666615/57590155-63b01280-74ef-11e9-8dc0-61df165f1cda.PNG">
	<p> Figure II.1. Architecture layout for People Counting Network</p>
</center>

In this work, we are going to utilize the existing VGG architecture as the backbone with our own parameter to fit with our hardward. To keep the output density not too small in size, we can alternatively reduce number of pooling layers. In my implementation, I kept 3 pooling layers this mean that for input images of size (480, 640) in our case the output will be reduced by `1/8` corresponding to input size of `(60, 80)`. A  quick formula that will help us calculate the output density map size is as follows

$$
input\_size = \frac{input\_size}{stride^{num\_pooling}}
$$

where stride is the stride configuration of the network pooling layers. Asuming that network have the same stride configuration across.  `num_pooling` is number of pooling layers. The VGG configuration that I used in this work is `architecture = [64, 64, 'M', 100, 100, 'M', 164, 164, 164, 'M', 256, 256, 256]`. Where `M` are pooling layers and number indicate the filter size. 

As discussed in earlier section, regression Convolutional Neural network are challenging to optimize. One big problem that are likely to occur called "dead" ReLU. source: [http://cs231n.github.io/neural-networks-1/#actfun](http://cs231n.github.io/neural-networks-1/#actfun)

>"Unfortunately, ReLU units can be fragile during training and can "die". For example, a large gradient flowing through a ReLU neuron could cause the weights to update in such a way that the neuron will never activate on any datapoint again. If this happens, then the gradient flowing through the unit will forever be zero from that point on. That is, the ReLU units can irreversibly die during training since they can get knocked off the data manifold. For example, you may find that as much as 40% of your network can be "dead" (i.e. neurons that never activate across the entire training dataset) if the learning rate is set too high. With a proper setting of the learning rate this is less frequently an issue."

We can fight with this problem by adjusting the appropriate learning rate. Alternatively, we can first try to change the `ReLU` layer in our VGG network to `LeakyReLU()` layers. In my implementation, I set the nergative slope of the LeakyReLU unit to `0.1`.

Side Note: I found that different dataset have different hyperparameter on the negative slope. On VGG cells dataset(which is not shown here), I set negative slope as `0.01` and `0.1` in Mall dataset. Alternatively, Here are list of thing that one can try to fight with CNN regression network keep outputing small regression values or `nan` loss. 

- Normalize the input on training dataset
- Replace activation function to `LeakyReLU` instead of `Tanh` and `ReLU`-
- Add weight regularizaition
- Reduce the network parameter
- Increse batchsize and add `BatchNorm` layer to the network. Alternatively, with small batchsize `GroupNorm` can be tried. 

## III.  Understanding the training process
The main training loop for each epoch can be pack in a few line of Python code utilizing `Pytorch` framework.

```python
	import torch.nn.functional as F
	
	#main training loop for each epoch
	for i, (idxs, inputs, gams, targets) in enumerate(train_loader):
		#idxs: idxs that the generator select. depend on how your pytorch
		# generator are set up. 
		inputs = inputs.to(device) # shape: (N, C, H, W). C=3
		targets = targets.to(device).float() #shape: (N,)
		gams = gams.to(device) #shape: (N, 1, HH, WW)
		# compute output
		output_count, output_map = model(inputs)
		#output_count#shape: (N,1, 1, 1)
		#output_map #shape: (N, 1, HH, WW)
		
		output_count = output_count.view(-1)#(N,)

		loss_count = F.smooth_l1_loss(output_count, target)#similar to mae loss
		loss_density_map = F.l1_loss(output_map, gam)#mae loss
		loss = loss_count + loss_density_map
		
       # compute gradient and do SGD step
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
```

Note that the 2 loss function are joined to help the model generilize both count and density map information at the same times. Smooth L1 Loss is used as regression count loss to avoid gradient explosion causing `nan` loss. 

By adding a density estimation map brand, this will also help us to localise peoples in the images. "Killing two bird with one stone" in other word

## IV. Model Evaluation and Result

### Model Evaluation
Visually, our model performed well on localising people head given an images as shown in figure I.V. Output density map by model can be then resize to input image size using bilinear upsampling operation. We can ultilize `skimage.
```
	from skimage.transform import resize

	# output_map not the same shape as output_map variable see above
	output_map_resize = resize(output_map, #shape: (HH, WW)
	                      (480, 640), #size of output images after upsampling 
	                      anti_aliasing=True)
```

![PC_sample02](https://user-images.githubusercontent.com/35666615/57590980-a88a7800-74f4-11e9-9c56-a332a8a6f8ad.PNG)            |  ![PC_sample01](https://user-images.githubusercontent.com/35666615/57590981-a88a7800-74f4-11e9-9c74-5cf8a932bd81.PNG)
:-------------------------:|:-------------------------:
![PC_sample04](https://user-images.githubusercontent.com/35666615/57590982-a9230e80-74f4-11e9-847f-29a78e05183c.PNG)  |  ![PC_sample03](https://user-images.githubusercontent.com/35666615/57590983-a9230e80-74f4-11e9-8fa2-17c9567cfbb4.PNG)
<center> Figure IV show example of images with density map output(after upsampling) by people count network</center>

### Result
Method			 | MAE      | RMSE		 | Average Error rate
:---------------:|:--------:|:----------:|:--------------:
VGG+density_map  |**7.93**  |**9.1**     | **18.9 %**     |
Deep neural network prone to overfit and hard to optimize. In my case, no validation set were used. I babys at the training process and stop once it first reach a plateau ranging from epoch 10-15 as shown in figure IV.2.

<center>
	<img src="https://user-images.githubusercontent.com/35666615/57649143-079bcb80-758d-11e9-8288-ef976ce5d0eb.PNG">
	<p>Figure IV.2 Training loss history of people count network. Note the nature of fast convergence learning curve. Which shown that the network will more likely to overfit at training period range beyond epochs # ~15.</p>
</center> 

## V.Code & Detail Implementation
Codes and detail implementation is available at [https://github.com/datduyng/Crowd_Counting_and_Localizing.pytorch.git](https://github.com/datduyng/Crowd_Counting_and_Localizing.pytorch.git)



## References
- This work is largely inspired by [CRSnet](https://arxiv.org/abs/1802.10062), [HeatmapRegulation](https://arxiv.org/abs/1803.05494), [TasselNet](https://arxiv.org/pdf/1707.02290.pdf).
- [http://cs231n.github.io/neural-networks-1/#actfun](http://cs231n.github.io/neural-networks-1/#actfun)
- ShanghaiTech Dataset. Available at [https://github.com/desenzhou/ShanghaiTechDataset](https://github.com/desenzhou/ShanghaiTechDataset)
- Mall Dataset . Available at [http://personal.ie.cuhk.edu.hk/~ccloy/downloads_mall_dataset.html](http://personal.ie.cuhk.edu.hk/~ccloy/downloads_mall_dataset.html)
- VERY DEEP CONVOLUTIONAL NETWORKS FOR LARGE-SCALE IMAGE RECOGNITION.
- Very Deep Convolutional Network for Large-Scale Image Recognition. Available at [https://arxiv.org/pdf/1409.1556.pdf](https://arxiv.org/pdf/1409.1556.pdf)
