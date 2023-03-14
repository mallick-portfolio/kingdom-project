import React from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Vulunteer_Contact from "./Vulunteer_Contact";
import Image from "next/image";
import vulunteerBg from "../../img/clipboard.png";
function Volunteer() {
  return (
    <section>
      <div className="flex justify-between flex-col sm:flex-row items-center lg:gap-12">
        <div className="md:w-1/2 w-auto">
          <Image
            width={0}
            height={0}
            className="w-auto md:h-[50rem] object-cover lg:h-[35rem]"
            src={vulunteerBg}
          />
        </div>
        <div className="md:w-1/2 w-auto md:pl-12 px-6 lg:pl-16 mt-10 sm:mt-0">
          <div className="content mb-[1.5rem] mt-4 lg:p-5">
            <h1 className="leading-[3rem] xl:hidden font-bold  text-[2.8rem] ">
              Volunteer Registration
            </h1>

            <h1 className="leading-[1]  hidden xl:block font-bold text-[4rem] font-sans">
              Volunteer Registration
            </h1>

            <p className=" font-base mt-12">
              Gain experience and do your part to contribute to an incredible{" "}
              <br /> and worthwhile global project.
            </p>

            <Button className=" text-primary rounded-md shadow-none hover:shadow-none bg-black      normal-case mt-16">
              {" "}
              <Link href="#becomeaVolunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </div>
      <div id="becomeaVolunteer">
        <Vulunteer_Contact />
      </div>
    </section>
  );
}

export default Volunteer;
