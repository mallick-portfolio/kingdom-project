import React from "react";
import styles from "../../styles/styles.module.css";
import MemberShip_Contact from "./MemberShip_Contact";
// imports imgage
import aboutUs from "../../img/home.aboutUs.jpg";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
// connect stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function MemberShips() {
  return (
    <>
      <section>
        <div className="">
          <div className="flex justify-between flex-col sm:flex-row items-center lg:gap-12">
            <div className="md:w-1/2 w-auto">
              <Image
                width={0}
                height={0}
                className="w-auto md:h-[50rem] object-cover lg:h-[35rem]"
                src={aboutUs}
              />
            </div>
            <div className="md:w-1/2 w-auto md:pl-12 px-6 lg:pl-16 mt-10 sm:mt-0">
              <div className="content mb-[1.5rem] mt-4 lg:p-5">
                <h1 className="leading-[3rem] xl:hidden font-bold  text-[2.8rem] ">
                  Membership application.
                </h1>

                <h1 className="leading-[1]  hidden xl:block font-bold text-[4rem] font-sans">
                  Membership <br /> application.
                </h1>
                <p className="font-base mt-12">
                  Feel a new experience in an incredible project
                </p>
                <p
                  className="font-base font-bold
            "
                >
                  Kingdom of Kush
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* application form */}
        <div className="p-[50px] mb-[20px] md:mt-16 bg-white lg:mx-[100px] shadow-2xl">
          <div className="flex flex-col justify-between gap-8 items-center pb-10">
            <h1 className="text-[30px] lg:text-[23px] leading-6 uppercase text-[#CB9833]">
              APPLICANT INFORMATION FORM
            </h1>
            <div>
              <h2 className="font-bold">
                <strong>Please provide all responses in English.</strong>
              </h2>
              <p>Required fields are indicated by an asterisk *</p>
            </div>
          </div>

          <div
            className="relative flex lg:mx-[50px] border-b-4 justify-evenly
        "
          >
            <div className="flex flex-col justify-center items-center">
              <p className="pb-3">Checkout</p>
              <span className="w-5 h-5 rounded-full bg-black absolute -bottom-3"></span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="pb-3">Finish</p>
              <span className="w-5 h-5 rounded-full bg-black absolute -bottom-3"></span>
            </div>
          </div>
          {/* ////// */}
          <div id="membership-contract">
            <Elements stripe={stripePromise}>
              <MemberShip_Contact />
            </Elements>
          </div>
        </div>
      </section>
    </>
  );
}

export default MemberShips;
