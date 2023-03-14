import Image from "next/image";
import React from "react";
import bg from "../../img/invest.jpg";
import InvestForm from "./InvestForm";

function InvestPage() {
  return (
    <section>
      <div className="flex justify-between flex-col sm:flex-row items-center gap-6 lg:gap-12">
        <div className="md:w-1/2 w-auto">
          <Image
            width={0}
            height={0}
            className="w-auto md:h-[50rem] object-cover lg:h-[35rem]"
            src={bg}
          />
        </div>

        <div className="md:w-1/2 w-auto md:pl-4 lg:pr-20 px-5">
          <div className="content mb-[1.5rem] mt-4">
            <h1 className="leading-[3rem] xl:pr-[10rem]  font-bold  text-[3.5rem] ">
              Invest into Project
            </h1>

            <p className=" font-base mt-6 xl:pr-[8rem]">
              Through This Form, You Can Express Your Interest To Invest In The
              KUSH KINGDOM. Please Fill In The Form And We Shall Contact You.
            </p>
          </div>
        </div>
      </div>
      <InvestForm />
    </section>
  );
}

export default InvestPage;
