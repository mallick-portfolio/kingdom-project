import React from "react";
import Styles from "../../styles/styles.module.css";
import { BsIntersect } from "react-icons/bs";

function AboutUsSection() {
  return (
    <section className="AboutUsSection">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[3rem]">
        <div
          className={`${Styles.aboutBg} py-10 h-[25rem] md:h-[43rem] lg:h-[45rem] relative`}
        >
          <div className="h-[11rem] w-[14rem] lg:h-[11rem] lg:w-[17rem] flex justify-start bottom-0 right-0 absolute bg-[#000]">
            <div className="text-primary flex flex-col pl-[2rem] justify-center  ">
              <div className=" flex items-center  space-x-3">
                <BsIntersect className=" text-white text-[1.5rem]" />

                <p className=" text-[2rem] font-bold">22+</p>
              </div>

              <p className="text-primary font-bold">
                Over the past <br />
                22 years
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pt-[6rem] lg:pl-12 pl-5 pt-[3rem]">
          <div className="content">
            <h4 className="uppercase text-base font-semibold sm:font-normal mb-2 sm:mb-0">
              About us
            </h4>
            <h1 className="font-bold lg:text-[2.8rem] sm:pr-8 lg:pr-0 lg:leading-[3.2rem] text-[2rem] leading-[2rem]">
              About creating a safe <br className="hidden lg:block" />
              haven
            </h1>
            <p className=" text-[15px] mt-7 pr-[3rem] 2xl:pr-[25rem] leading-relaxed lg:leading-loose">
              Over the past 22 years, a small renaissance group started
              envisioning together about creating a safe haven, a new society,
              with a common goal to give a path to all who come in good will
              looking for a better life, not a place to take-away opportunities
              from others. Bir Tawil, located between Egypt and Sudan, is a land
              that has not been claimed by any state. Under international law it
              is known as Terra Nullius, a “no man’s land.” It is a historically
              significant region which formerly has been part of the legendary
              Kingdom of Kush. It is now home to an inspiring resurrectional
              plan to create the next Dubai-like Kingdom of Kush – a social
              development, where opportunity aligns with the need for innovative
              infrastructure, sustainable housing, renewable energy, clean
              water, and localized food security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
