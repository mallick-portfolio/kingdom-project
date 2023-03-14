import React from "react";
import Image from "next/image";
// import image
import s1 from "../../img/slider/slider_4.jpg";

function FutureGoverningNext() {
  return (
    <section className="FutureGoverningNext">
      <div className="flex justify-between flex-col sm:flex-row items-center gap-6 lg:gap-12 lg:my-20 my-12">
        <div className="sm:w-1/2 w-auto slider py-4 px-8 md:pl-[2rem] lg:pl-[5rem] ">
          <div className="content">
            <p className=" text-base pb-2 leading-[1.6rem] lg:leading-[1.8rem] pr-6">
              The Governing Structure of the Kingdom will be a Constitutional
              Monarchy, with a Monarch elected based on merits. The first
              monarch will be Queen Mother Dr. Delois Blakely, a well known and
              internationally respected humanitarian as well as a spiritual
              leader who for over 50 years served as United Nations Goodwill
              Ambassador. Queen Mother has been recently awarded a Lifetime
              Achievement Award by the President of the United States Mr. Joe
              Biden. The Kingdom will also have a Parliament, with all elected
              members voted in by the citizens.
            </p>
          </div>
        </div>

        <div className={`sm:w-1/2 w-auto pr-6 lg:pr-12 px-8`}>
          <Image src={s1} height={650} width={500} alt="slider image" />
        </div>
      </div>
    </section>
  );
}

export default FutureGoverningNext;
