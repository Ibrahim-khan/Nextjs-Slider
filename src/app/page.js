"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Zoom } from 'react-slideshow-image'; 
import 'react-slideshow-image/dist/styles.css';

export default function Home() {

  const images = [ 
    "coverphoto/coverphoto.png",
    "coverphoto/coverphoto1.png", 
    "coverphoto/coverphoto2.png", 
    
    ];

  const zoomInPropertics = {
      scale: 1,
      duration: 3000,
      transitionDuration: 300,
      infinity: true,
      indicators: true,

      prevArrow : (
        <div className="ml-10 top-1/2">
          <ArrowLeftIcon 
          className="h-8 w-8 font-normal text-white cursor-pointer">
          
          
          
          </ArrowLeftIcon>
        </div>
      ),

      nextArrow : (
        <div className="mr-10 top-1/2">
          <ArrowRightIcon 
          className="h-8 w-8 font-normal text-white cursor-pointer">
          
          
          
          </ArrowRightIcon>
        </div>
      )
  }
  


  return (
    <main>
      <h1 className="text-3xl font-bold underline bg-red-200">
        Bio Spray Plus
      </h1>
      <div className="">
        <img src="coverphoto/coverphoto.png" />
        
            
      </div>
    </main>
  );

};