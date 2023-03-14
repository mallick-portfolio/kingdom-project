import Image from "next/image";
import React from "react";
import workImage from "../../img/home.smallgroup.jpg";
function SmallGroup() {
  return (
    <section className="SmallGroup mt-10 sm:mt-0">
      <div className="flex justify-between flex-col-reverse sm:flex-row items-center lg:gap-12">
        <div className="md:w-1/2 w-auto md:pl-4 lg:pl-20">
          <div className="px-5 sm:px-0">
            <p className="text-[15px] mt-12 leading-relaxed  ">
              WHAT STARTED AS A SMALL GROUP OF ENTHUSIASTS FROM ALL WALKS OF
              LIFE HAS OVER THE PAST TWO DECADES TRANSFORMED INTO A MASSIVE
              LIVING ORGANISM OF VOLUNTEERS.
            </p>
            <p className=" text-[15px] mt-5 md:mt-3 lg:mt-7  leading-relaxed pr-[3rem]  ">
              What started as a small group of enthusiasts from all walks of
              life has over the past two decades transformed into a massive
              living organism of volunteers. These volunteers have one common
              goal – to make their vision of the Kingdom of Kush a reality, with
              all efforts passionately undertaken in a decentralized but very
              methodical and cohesive manner due to the noble nature of the
              cause. The Kingdom of Kush is an “open-source” smart city state,
              inviting all to take part in creating access to prosperity and
              well-being for present and future generations to come. Many
              countries have already expressed unequivocal recognition and
              support for the new nation and our ethos which at its core
              embodies intercultural diversity, and the value of human
              connection. This will not be a place that values one race or
              religion over another but will offer inclusivity to all people.
              Diverse cultural expressions in music, art, film, culinary arts,
              and sports will weave every participating culture into this
              beautiful tapestry which we hope to share with the world through
              satellite Kingdom of Kush micro-communities soon.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 w-auto">
          <Image
            width={0}
            height={0}
            className="w-auto md:h-[50rem] object-cover lg:h-[35rem]"
            src={workImage}
          />
        </div>
      </div>
    </section>
  );
}

export default SmallGroup;
