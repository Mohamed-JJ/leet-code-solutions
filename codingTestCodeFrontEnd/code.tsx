"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState<[]>([]);
  useEffect(()=> {
      const FetchImages = async ()  => {
        const imgs = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=UC6QeKH1sTZwo7OgHc1oAJJu4JFV59TJ&q=q&limit=25&offset=0&lang=en&bundle=messaging_non_clips");
        const untreatedImages = imgs.data.data;
        const sortedd_dates = untreatedImages.sort((a, b)=> {
          // const adate = new Date(a.import_datetime);
          // const bdate = new Date(b.import_datetime)
          // return bdate - adate;
          return new Date(b.import_datetime) - new Date(a.import_datetime);
        });
        const filteredimgs = sortedd_dates.filter((img)=> img.username && img.username !== "");
        console.log(filteredimgs);
        setImages(filteredimgs);
      };

      FetchImages();

  }, [])
  return (
    <main className="w-full h-full flex justify-center">
      <div className="h-full w-[50%] flex items-center overflow-x-scroll flex-wrap">
     {images.map((image,index)=> {return <div key={index} className="h-auto w-[25%]">
      <img className="h-auto w-full" src={image?.images.original.url} alt={image?.title} />
      {image.import_datetime}
     </div>})}

      </div>
      
    </main>
  );
}
