import React, { useState } from "react";
import aboutUs from "../../img/aboutus/oh__img158-1-scaled.jpg.jpg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

function FindOpportunintes() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="FindOpportunintes">
      <div className="flex justify-between flex-col sm:flex-row items-center lg:gap-12 lg:my-12 mt-8">
        <div className="md:w-2/5 w-auto md:pl-4 px-5 lg:pl-20">
          <div className="content ">
            <h1 className=" text-[2rem] xl:text-[2.8rem] mb-8 font-bold leading-[2.3rem] lg:leading-[3.2rem]">
              Find The Opportunities And a Better Future in Africa.
            </h1>
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-base text-left border-b-0 [&>span]:ml-0  justify-end flex-row-reverse text-black"
              >
                There will be no need for African people
              </AccordionHeader>

              <AccordionBody className="text-base ">
                to leave the continent searching for a better future. The
                continent has more than sufficient resources to explore and
                develop, thus creating endless opportunities for a better life
                on the continent itself.{" "}
                <b className="font-bold">
                  It’s all about adding value to endless available resources on
                  the continent itself, not simply exporting the resources and
                  with this all the jobs and related opportunities to other
                  countries .
                </b>{" "}
                The future is now. The new generation must take charge of their
                own destiny because it can and we believe will do so, as this is
                the only way to make Africa what it can be, not what it has
                been.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-base border-b-0 [&>span]:ml-0    justify-end flex-row-reverse pb-2 text-black text-left"
              >
                Africa does not need aid or to borrow money that others
                generated
              </AccordionHeader>

              <AccordionBody className="text-base ">
                by taking resources from Africa. Africa and its people have
                everything needed to lead and support the world. Let’s make this
                happen together now! Join the movement of this growing Kingdom
                which has attracted from over 33 countries impact driven
                volunteers, talented professionals, service providers and
                strategic partners to collaborate, share a common vision, and
                explore the possibilities involved with building a sustainable
                future for generations to live, work, and appreciate life.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse pb-2 text-black text-left"
              >
                Our diverse multi-generational community culture celebrates
              </AccordionHeader>

              <AccordionBody className="text-base ">
                a lifelong learning approach to sustainable living with access
                to trade skills training, internships, and mentorship programs
                to support career opportunities. Building a viable and
                innovative labor force will involve an integrative approach to
                pairing skills training, and industrial development with
                operating entities in the region.
              </AccordionBody>
            </Accordion>
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

export default FindOpportunintes;
