/* eslint-disable */ 

import { marked } from "marked";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

type ProductType = {
  name: string;
  tagLine: string;
  mainHref: string;
  icon: string;
  web?: string;
  ios?: string;
  android?: string;
  chromewebstore?: string;
  description?: string;
  images?: string[];
};

const products: ProductType[] = [
  {
    name: "Knugget",
    tagLine: "Never forget your learnings again.",
    icon: "/logo-knugget.png",
    images: [
      "/knugget-01.jpeg",
      "/knugget-02.jpeg",
      "/knugget-03.jpeg",
      "/knugget-04.jpeg",
      "/knugget-05.jpeg",
    ],
    web: "https://www.letsknugget.com/",
    mainHref: "https://www.letsknugget.com/",
    ios: "https://apps.apple.com/us/app/knugget-keep-it-in-mind/id1558672357#?platform=iphone",
    android:
      "https://play.google.com/store/apps/details?id=com.letsknugget.knugget.keepitinmind",
    chromewebstore:
      "https://chrome.google.com/webstore/detail/knugget-web-clipper/oebaiimomknnlpfhmpllaacfhphnghfn",
  },
  {
    name: "Notion Search Assistant",
    tagLine: "See relevant Notion notes from google and bing search",

    icon: "/logo-notion-search-assistant.gif",
    mainHref:
      "https://chrome.google.com/webstore/detail/notion-search-assistant/hohdpkcejanbipifiggebdnbfglcjjin",
    chromewebstore:
      "https://chrome.google.com/webstore/detail/notion-search-assistant/hohdpkcejanbipifiggebdnbfglcjjin",
    description: `Features: 
- Search Notion notes right from chrome navigation bar :)) 
- If there are relevant notes, a module will be displayed right on the google search page
![notion](/notion-search-assistant-01.png)`,
  },
  {
    name: "Sell Stuff Seattle",
    tagLine:
      "Give us a call and we will help you sell unwanted items in your house",
    icon: "/logo-sell-stuff-seattle.png",
    web: "https://sellstuffseattle.vercel.app/",
    mainHref: "https://sellstuffseattle.vercel.app/",
    description: `How does it work?
- Find out all the junk in your house
- Give us a call or email us with a picture of all the unwanted items you would like to sell
- We will help to sell your unwanted items and give you back the money
- If items cannot be sold, we can help you donate to Goodwill or return it back to you`,
  },
];

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div className="mt-10 w-full">
      <hr />
      <div className="flex flex-wrap sm:flex-nowrap flex-row gap-7 mt-5 justify-center md:justify-between w-full">
        <div className="">
          <a href={product.mainHref} target={"_blank"} rel="noreferrer">
            <img src={product.icon} className="w-32 h-32 rounded-3xl " />
          </a>
        </div>
        <div className="w-full sm:w-4/5">
          <a href={product.mainHref} target={"_blank"} rel="noreferrer">
            <div>
              <span className="font-semibold text-1xl md:text-2xl">
                {product.name}{" "}
              </span>
              <span>
                {"- "}
                {product.tagLine}
              </span>
            </div>
          </a>
          <div>
            {product?.web && (
              <a href={product.web} target={"_blank"} rel="noreferrer">
                <img
                  src="/available-on-the-web.png"
                  className="w-28 inline-block m-2"
                />
              </a>
            )}
            {product?.ios && (
              <a href={product.ios} target={"_blank"} rel="noreferrer">
                <img
                  src="/download-on-appstore.png"
                  className="w-28 inline-block m-2"
                />
              </a>
            )}
            {product?.android && (
              <a href={product.android} target={"_blank"} rel="noreferrer">
                <img
                  src="/get-it-on-google-play.png"
                  className="w-36 inline-block m-2"
                />
              </a>
            )}
            {product?.chromewebstore && (
              <a href={product.chromewebstore} target={"_blank"} rel="noreferrer">
                <img
                  src="/available-in-chrome-web-store.png"
                  className="inline-block m-2 w-36"
                />
              </a>
            )}
          </div>

          {product.description && (
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: marked(product.description),
              }}
            />
          )}

          {product.images && (
            <div className="flex justify-center sm:justify-start flex-wrap">
              {product.images.map((image) => (
                <img src={image} className="w-52 inline-block m-1" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default function Products() {
  return (
    <div className="w-full max-w-full md:max-w-4xl mx-auto p-5 mt-2">
      <div className="flex justify-start cursor-pointer">
        <Link href="/">
          <div className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded block">
            <FaHome
              size={25}
              style={{ display: "inline", verticalAlign: "bottom" }}
            />
            <span className="ml-2">Home</span>
          </div>
        </Link>
      </div>
      <div className="font-bold text-2xl md:text-4xl mt-6">
        Hey! My name is Dominic Nguyen.
      </div>
      <div className="my-3 font-light">
        I'm an opensource enthusiast. This site is a visual collection of some
        of my projects. Welcome!
      </div>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
