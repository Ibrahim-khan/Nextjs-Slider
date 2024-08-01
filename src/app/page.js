"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Zoom } from 'react-slideshow-image'; 
import 'react-slideshow-image/dist/styles.css';
import "./slideshow.css"

export default function Home() {

  const images = [ 
    "coverphoto/coverphoto.png",
    "coverphoto/coverphoto1.png", 
    "coverphoto/coverphoto2.png", 
    
    ];

  const zoomInPropertics = {
      scale: 1,
      duration: 3000,
      transitionDuration: 1000,
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
    <main className="sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 min-h-screen max-w-screen flex justify-center items-center position relative">
      
      
      <div className="w-full sm:h-[600px] md:h-[700px] relative">
        <Zoom {...zoomInPropertics}>
          {images.map((each, index) => (
            <div key={index} className="flex items-center justify-center h-full w-full">
              <img className="w-full h-full rounded-lg" src={each}></img>
            </div>
          ))}

        </Zoom>
      </div>

    </main>
  );

};