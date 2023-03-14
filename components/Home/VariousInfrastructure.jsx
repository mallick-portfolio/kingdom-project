import React from "react";
import Image from "next/image";

// import image
import s1 from "../../img/slider/slider_3.jpg";

function VariousInfrastructure() {
  return (
    <section className="VariousInfrastructure">
      <div className="flex justify-between flex-col sm:flex-row items-center lg:gap-12 lg:my-12 mt-8">
        <div className="w-auto  lg:pl-20 md:h-[40rem] object-cover lg:h-[35rem]">
          <Image src={s1} height={650} width={500} alt="slider image" />
        </div>

        <div className="md:w-1/2 w-auto md:pr-12 px-5">
          <div className="content">
            <h4 className=" font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.5rem]  leading-tight 2xl:pr-[30rem] mb-10 ">
              Various infrastructure related projects are also on the way, such
              as:
            </h4>
            <p className=" text-base pb-2 px-2  2xl:pr-[20rem]">
              housing, schools, airport, hospitals, communication, roads as well
              as water related projects.
              <b className="font-bold">
                Plans are in place to introduce mass transit into the region and
                the Kingdom of Kush Airline.
              </b>{" "}
              The future Kingdom plans to invest much more in the region,
              including billions of dollars in its neighboring countries Sudan
              and Egypt, to further the development of construction,
              manufacturing, and processing industries. All this will lay the
              necessary foundation for consumer-focused services and{" "}
              <b className="font-bold">
                create hundreds of thousands of jobs for the people of Sudan,
                Egypt and other countries in Africa.
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VariousInfrastructure;
