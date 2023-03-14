import React from "react";
import Image from "next/image";
// import image
import s1 from "../../img/slider/slider_3.jpg";

function BloomingVison() {
  return (
    <section className="BloomingVison">
      <div className="flex justify-between flex-col sm:flex-row items-center lg:gap-12 lg:my-12 mt-8">
        <div
          className={`sm:w-1/2 w-auto slider py-4 px-8 md:pl-[2rem] lg:pl-[5rem] `}
        >
          <Image src={s1} height={650} width={500} alt="slider image" />
        </div>

        <div className="sm:w-1/2 w-auto pr-6 lg:pr-12 px-8">
          <div className="content">
            <h4 className=" font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem]  leading-tight 2xl:pr-[30rem] mb-10">
              A Blooming Vision of Business & Industry
            </h4>
            <p className=" text-base pb-2 px-2  2xl:pr-[20rem]">
              With plans to become the next Dubai and Singapore-like business
              hub centered around the pursuit of knowledge and intellectual
              endeavors,{" "}
              <b className="font-bold">
                the Kingdom actively welcomes advanced research
              </b>{" "}
              and development in all areas of business connecting Africa and the
              rest of the world. Significant financial commitments have already
              been made toward a thriving business community helping to
              stabilize the region economically and support the global economy.
              It will be necessary to continue funding the industrial ecosystem
              in order to meet community needs involving energy, natural
              resources, agriculture, and mining.{" "}
              <b className="font-bold">
                The Kingdom’s goal is to turn Africa into a financial supporter
                of the global economy, not to remain its beneficiary.
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BloomingVison;
