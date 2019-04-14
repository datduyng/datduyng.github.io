---
layout: post
title: Data Augmentation for Semantic Segmantation with Pytorch
feature-img: "https://user-images.githubusercontent.com/35666615/54736287-6b4edd00-4b78-11e9-9155-d8019e7ce790.png"
thumbnail: "https://user-images.githubusercontent.com/35666615/54736287-6b4edd00-4b78-11e9-9155-d8019e7ce790.png"
tags: [semantic segmantation, pytorch, deep learning, data augmentation]
---


## Intro on Data augmentation
we all have been there. In many of our machine learning class, we are provided with nice and neat dataset where datas are vary. Or when starting a new project, we often hope that someone have already provide us on some of the big dataset website like Kaggle. 

Data augmentation help solve various dataset problem. When our Data are skew and limited, we can generate more using various transformation like cropping, colorjittering, and resizing. [Bharath Raj](https://medium.com/@thatbrguy) discuss various transformation technique in his [article](https://medium.com/nanonets/how-to-use-deep-learning-when-you-have-limited-data-part-2-data-augmentation-c26971dc8ced)

Example of data augmentation on both image and label are shown as follow. 


<center><img src="https://user-images.githubusercontent.com/35666615/54735532-ba930e80-4b74-11e9-87f8-991dff41868b.png" alt="wheat-original"></center>
<center> Original image and label masked</center><br><br>

<center><img src="https://user-images.githubusercontent.com/35666615/54735479-6c7e0b00-4b74-11e9-80d5-f6f67a62b958.png" alt="Data augmentation example 01"></center>

<center><img src="https://user-images.githubusercontent.com/35666615/54735489-7acc2700-4b74-11e9-9a3e-3fc823076cb1.png" alt="Data augmentation example 02"></center>
<center>Rnadom rotation transformation on data</center>


## Data Augmentation for Semantic segmantation
Pytorch provide a wrapper `Compose` class to perform data augmentation in a pipeline process. One main problem with provided wrapper is that The transformation only performed for the input image but not the target images. 

In case of Semantic segmantation or Object detection where label are bounding boxed on the target label or pixel wise labeled. When   crop operations are performed on input data then the same transformation need to be perform on input images. 

One solution would be Writing our own wrapper `Compose` class to perform data augmentation. 

Here is how a regular Dataset pytroch wrapper class would look like

```python
class CustomeDataset(Dataset):
    def __init__(self, images_path, csv_path, transform=None):
        '''
        Inputs:
            images_path(str): path to image directories
            csv_path(str): path to csv file with image and label urls. 
            #folow by: image_url,label_url
                path_to_image1;path_to_label1
                path_to_image2;path_to_label2
        '''
        self.images_path = images_path
        self.data_info = pd.read_csv(images_path+csv_path, delimiter=';')
        #to_tensor operation
        self.transform = transform
    def __getitem__(self, idx):
        #PIL image
        image = Image.open(self.images_path+self.data_info['image_url'][idx])
        label = Image.open(self.images_path+self.data_info['label_url'][idx])
        
        if(self.transform is not None):
            image, label = self.transform([image, label])
        return (idx, self.to_tensor(image), self.to_tensor(label))
```

The usage for wrapper class above that we create would look something like this

```python

dataset_folder = 'PATH_TO_IMAGE_DIR'

#define all the transform
transform = EnhancedCompose([
    torchvision.transforms.RandomGrayscale(p=0.1),
    torchvision.transforms.ColorJitter(brightness=0.2, #some number
                                        contrast=0.4, 
                                        saturation=0.3, 
                                        hue=0.25),
])

custome_dset = CustomeDataset(dataset_folder,'/dataseturl.csv', 
                                transform=transform)       
custome_dset.__getitem__(3)# this will return tuple of (idx, image, label)
```

As we discuss earlier, the transform only perform on input image So let's create a new wrapper. A simple transform class can be written as follow to augment with Pytorch transform method. 

```python
class ToNumpy(object):
    '''convert PIL image to numpy'''
    def __call__(self, image):
        return np.asarray(image)
```

Pytorch transformation method like `RandomAffine` and `RandomCrop` does not provide infomation about the cropped region, therefore, we will write our own `RandomCrop` or `RandomRotation` follow template above. [Wei Ouyang]() shared his imageUtils module which provide many helpful Transformation following the above template. [Link to his ImageUtils module](https://gist.github.com/oeway/2e3b989e0343f0884388ed7ed82eb3b0)
 
The only modification to make his module work more perfectly is to modifies the `EnhancedCompose` class. and add `ToNumpy` Wrapper as describe above. We will add a random `seed` then pass to transformation wrapper. This allow transformation on input and target to have the same random seed.

A working `EnhancedCompose` Wrapper would look like as follow 

```python
class EnhancedCompose(object):
    """Composes several transforms together."""
    def __init__(self, transforms):
        self.transforms = transforms

    def __call__(self, img):
        for t in self.transforms:
            if isinstance(t, collections.Sequence):
                tmp_ = []
                #gen seed so that label and image will match when randomize
                seed = np.random.randint(10000)
                for i, im_ in enumerate(img):
                    if callable(t[i]):
                        #we add a seed here to generate same seed for input and target
                        if 'seed' in inspect.getargspec(t[i]).args:
                            tmp_.append(t[i](im_, seed=seed))
                        else: tmp_.append(t[i](im_))
                    else: tmp_.append(im_)
                img = tmp_
            elif callable(t):
                if isinstance(img, collections.Sequence): img[0] = t(img[0])
                else: img = t(img)
            elif t is None: continue
            else: raise Exception('unexpected type')
        return img
```

On Transform wrapper like `RandomRotate` and `RandomCrop`, we will modified it to. 
```python
def __call__(self, image, seed=10)
```
A more complete version of the module can be find [**here**](https://gist.github.com/datduyng/8d0db0afcfe4ba1f1fb4fa307938f5f9)

Usage for our modified module would allow us to perform both Transformation form Pytorch library and our custome.

```python
import image_utils #our modified module

dataset_folder = '../../../images/spikelet-dataset/spikelet-batch01/'

transform = EnhancedCompose([
	#some pytorch provided operation
    torchvision.transforms.RandomGrayscale(p=0.1), #note this operation only perform on input image
    torchvision.transforms.ColorJitter(brightness=0.2, 
                                        contrast=0.4, 
                                        saturation=0.3, 
                                        hue=0.25),
    [ToNumpy(), ToNumpy()],
    #smoe defined operation
    [image_utils.RandomCropNumpy(size=(512, 512)),RandomCropNumpy(size=(512, 512))],
    ......
])

SEM_dset_train = SEMDatasetTrain(dataset_folder,'/dataseturl.csv', 
                                transform=transform)
SEM_dset_train.data_info.head()
```


## Reference
- [https://medium.com/nanonets/how-to-use-deep-learning-when-you-have-limited-data-part-2-data-augmentation-c26971dc8ced](https://medium.com/nanonets/how-to-use-deep-learning-when-you-have-limited-data-part-2-data-augmentation-c26971dc8ced)
- https://gist.githubusercontent.com/oeway/2e3b989e0343f0884388ed7ed82eb3b0/raw/82505cc2c7b4cfdf61b537bb8aae146658af65b5/imageUtils.py
- [https://www.kdnuggets.com/2018/09/data-augmentation-bounding-boxes-image-transforms.html](https://www.kdnuggets.com/2018/09/data-augmentation-bounding-boxes-image-transforms.html)
