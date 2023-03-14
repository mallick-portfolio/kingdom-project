import React from "react";
import styles from "../../styles/styles.module.css";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import Vendor_Contact from "./Vendor_Contact";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import vulunteerBg from "../../img/clipboard.png";
import Image from "next/image";
// connect stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function Vendor() {
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
              Vendor Registration
            </h1>

            <p className=" font-base mt-12">
              Feel a new experience in an incredible project
            </p>
            <p className=" font-base font-bold">Kingdom of Kush</p>

            <Button className=" text-primary rounded-md shadow-none hover:shadow-none bg-black      normal-case mt-16">
              <Link href="#becomeaVendor">Become a Vendor</Link>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <Vendor_Contact id="becomeaVendor" />
        </Elements>
      </div>
    </section>
  );
}

export default Vendor;
