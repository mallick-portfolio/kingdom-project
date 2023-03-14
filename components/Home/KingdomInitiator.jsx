import React from "react";
import Styles from "../../styles/styles.module.css";
import aboutUs from "../../img/aboutus/oh__img158-1-scaled.jpg.jpg";
import Image from "next/image";
function KingdomInitiator() {
  return (
    <section className="KingdomInitiator">
      <div className="flex justify-between flex-col sm:flex-row items-center lg:gap-12 lg:my-12 mt-8">
        <div className="md:w-2/5 w-auto md:pl-4 px-5 lg:pl-20">
          <div className="content">
            <h1 className=" text-[2rem] xl:text-[3rem] mb-[4rem] font-bold  leading-tight">
              The Kingdom is already an initiator
            </h1>
            <p>
              developer and a supporter of growing agricultural and natural
              resource development projects that span over 25 countries. This
              blooming Kingdom has already obtained a legal right to{" "}
              <b className=" font-bold">30 million hectares of land</b> develop
              over , significant amounts of natural resources (such as gold,
              diamonds, copper, lithium, iron, cobalt mines as well as water,
              rubber and many other resources) and is in the process of engaging
              in additional natural resources, mining, de-desertification, and
              clean water initiatives. This development plan offers regionalized
              food security and viable commodity production for the world.
              Successful cultivation is already underway and currently producing
              over 100 tons of various agricultural products, such as:
            </p>
          </div>
        </div>

        <div className="md:w-3/5 w-auto">
          <Image
            width={0}
            height={0}
            className="w-auto md:h-[53rem] object-cover lg:h-[48rem]"
            src={aboutUs}
          />
        </div>
      </div>
    </section>
  );
}

export default KingdomInitiator;
