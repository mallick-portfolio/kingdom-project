import React, { useState } from "react";
import Image from "next/image";
// import image
import s1 from "../../img/slider/slider_3.jpg";
import s2 from "../../img/slider/slider_1.jpg";
import s3 from "../../img/slider/slider_1.jpg";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function FutureGoverning() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="FutureGoverning">
      <div className="flex justify-between flex-col sm:flex-row items-center gap-6 lg:gap-12 my-16">
        <div
          className={`sm:w-1/2 w-auto slider py-4 px-8 md:pl-[2rem] lg:pl-[5rem] `}
        >
          <Image src={s1} height={650} width={500} alt="slider image" />
        </div>

        <div className="sm:w-1/2 w-auto pr-6 lg:pr-12 px-8">
          <div className="content">
            <p className=" text-base pb-2">
              JUST A DREAM, NOW PART OF THE AWAKENING OF OVER SEVEN MILLION
              PEOPLE
            </p>

            <h4 className=" font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem]  leading-tight 2xl:pr-[30rem]">
              Future Governing Structures & Citizenship
            </h4>
            <div>
              <Accordion open={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse"
                >
                  What appeared initially just as
                </AccordionHeader>

                <AccordionBody className="text-base 2xl:pr-[22rem]">
                  a dream is now part of an awakening for over seven million
                  people who have already applied for citizenship and have
                  galvanized international luminaries from every continent in
                  the world. Future “Citizenship by Investment” programs will
                  also feature financial assistance for applicants.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-base border-b-0 [&>span]:ml-0 text-left  justify-end flex-row-reverse pb-2"
                >
                  The Kingdom will introduce the establishment
                </AccordionHeader>

                <AccordionBody className="text-base 2xl:pr-[22rem]">
                  of the Ministry of Peaceful Coexistence and intends to create
                  a better way of life that is free from various humanitarian
                  abuses such as inquisition, holocaust, slavery, or what
                  happened in Tulsa Oklahoma (“Black Wall Street”), so the
                  history does not repeat itself ever again. The core group has
                  thoroughly studied over 195 national constitutions and learned
                  many lessons in order to implement an effective governance for
                  the Kingdom.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureGoverning;
