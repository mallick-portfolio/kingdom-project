import React from "react";
import { Button } from "@material-tailwind/react";
import YoutubeStyles from "../../styles/youtube.module.css";

function Hero() {
  return (
    <section className="Hero">
      <div
        className={`${YoutubeStyles.youtubeContainer} relative  w-[100%] h-[100vh]  max-h-[40rem]  md:max-h-[100vh] `}
      >
        <iframe
          title="YouTube video player"
          src="https://www.youtube.com/embed/_eO9RyErOMM?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=0&playsinline=0&rel=0&enablejsapi=1"
          allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=" w-[300%] -ml-[100%] h-[120%]  max-h-[40rem] xl:max-h-[120%] lg:max-h-[100%]  md:max-h-[100%]  "
        ></iframe>
        <div className="text-heading text-black  top-[40%] md:top-[50%] left-[7%] absolute">
          <p className=" text-base font-bold  text-black mb-3">
            TOGETHER WE PROSPER. THE FUTURE IS NOW
          </p>
          <h1 className=" text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold text-white md:leading-[4rem] leading-[2.5rem] ">
            Kingdom Of <br className="hidden lg:block" />
            Kush
          </h1>
          <Button
            className=" bg-black uppercase rounded-md  shadow-none   text-[1rem]  cursor-pointer hover:shadow-none px-32 md:mt-12 mt-36 font-normal text-primary
            "
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
