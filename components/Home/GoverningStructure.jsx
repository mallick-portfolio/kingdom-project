import React, { useState } from "react";
import aboutUs from "../../img/home.aboutUs.jpg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

function GoverningStructure() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="GoverningStructure">
      <div className="flex justify-between flex-col sm:flex-row items-center lg:gap-12 lg:my-12 mt-8">
        <div className="md:w-1/2 w-auto">
          <Image
            width={0}
            height={0}
            className="w-auto md:h-[40rem] object-cover lg:h-[35rem]"
            src={aboutUs}
          />
        </div>

        <div className="md:w-1/2 w-auto md:pl-4 px-5">
          <div className="content">
            <p className=" text-base pb-2 2xl:pr-[18rem]">
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

            <div>
              <Accordion open={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse text-black"
                >
                  (1) the 6th Region
                </AccordionHeader>

                <AccordionBody className="text-base 2xl:pr-[22rem]">
                  of the AU African Diaspora policies as an integral stakeholder
                  that has established the preliminary framework for a cohesive
                  developmental paradigm;
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse pb-2 text-black"
                >
                  (2) Development of the new platform
                </AccordionHeader>

                <AccordionBody className="text-base 2xl:pr-[22rem]">
                  and resolution that will establish the United Nations (UN)
                  Permanent Forum of Peoples of African Descent to legally
                  address global inequities. Already 193-member body unanimously
                  adopted a resolution that established the UN Permanent Forum
                  of People of African Descent, a 10-member advisory body that
                  works closely with the Geneva-based Human Rights Council.
                </AccordionBody>
              </Accordion>
              <p className=" text-base pb-2 2xl:pr-[18rem] mt-6">
                The Kingdom of Kush is committed to put in place the first of
                its kind, a legally binding instrument of commitment to these UN
                and AU major initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoverningStructure;
