import React, { useEffect, useState, useContext } from "react";
import { Button } from "@material-tailwind/react";
import { vendorContext } from "@/context/VendorContext";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

function vendor_Contact() {
  const [cardError, setCardError] = useState(null);
  const [button, setButton] = useState(true);

  const { vendor, setVendor, vendorInitial, postVendor } =
    useContext(vendorContext);

  const stripe = useStripe();

  // to access card element
  const elements = useElements();

  useEffect(() => {
    if (vendor.CardInfo != "") {
      console.log(vendor);
      postVendor();
      return;
    }
  }, [vendor.CardInfo]);

  // onetime payment
  const createOntimePayment = async () => {
    try {
      if (elements.getElement("card") === null) return;

      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card"),
      });

      if (error) {
        setCardError(error);
        return;
      }

      setCardError(null);

      const res = await fetch(`/api/chargepayment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 349,
        }),
      });

      const data = await res.json();

      if (!res.ok) return alert("Payment unsuccessfull!");

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement("card"),
          },
        });

      setButton(false);
      if (confirmError) return alert("Payment unsuccessfull!");
      setVendor({
        ...vendor,
        CardInfo: `Amount: $${paymentIntent.amount}  \n ClientSecret: ${paymentIntent.client_secret}`,
      });
      setButton(true);
      elements.getElement(CardElement).clear();
      alert("Payment successfull!");

      // send mail
      const sendmail = await fetch(`/api/sendmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: setVendor.Email,
          subject: `Your Donation $${setVendor.Amount / 100} to people!`,
          message: "Thanks for Donation",
        }),
      });
      setVendor(vendorInitial);
    } catch (err) {
      console.error(err);
      alert("Payment Faild!" + err.message);
    }
  };

  // handle selectedAmount
  const handleSubmit = (e) => {
    e.preventDefault();
    if (elements.getElement("card") != null) {
      createOntimePayment();
      return;
    }
  };

  return (
    <div className=" container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem] ">
      <div>
        <h1
          className=" text-[1.5rem] font-bold
        mb-4"
        >
          General Information
        </h1>
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          {/* ///////// */}
          <div className=" grid grid-cols-2 gap-x-8 mb-6">
            <div>
              <label
                className=" font-bold after:content-['*'] after:text-red  after:pl-1 block"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.FirstName}
                onChange={(e) =>
                  setVendor({ ...vendor, FirstName: e.target.value })
                }
                required
              />
              <p className=" text-sm mt-2">First</p>
              {/* <p className=" text-sm mt-[1px] warningMessage text-red  ">
                This field is required.
              </p> */}
            </div>
            <div>
              <label className="   invisible font-bold after:content-['*'] after:text-red  block">
                Name
              </label>
              <input
                required
                type="text"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.LastName}
                onChange={(e) =>
                  setVendor({ ...vendor, LastName: e.target.value })
                }
              />
              <p className=" text-sm mt-2">Last</p>
            </div>
          </div>

          {/* ///////// */}
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-x-5">
            <div>
              <label
                className="  font-bold after:content-['*'] after:text-red  after:pl-1 block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.Email}
                onChange={(e) =>
                  setVendor({ ...vendor, Email: e.target.value })
                }
              />
              {/* <p
                className={`  text-sm mt-[1px]  text-red`}
              >
                This field is required.
              </p> */}
            </div>
            <div>
              <label
                className="   after:pl-1 font-bold after:content-['*'] after:text-red  block"
                htmlFor="dateOfBirth"
              >
                Date of birth
              </label>
              <input
                required
                type="date"
                id="dateOfBirth"
                className="  py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.DateofBirth}
                onChange={(e) =>
                  setVendor({ ...vendor, DateofBirth: e.target.value })
                }
              />
              <p className=" invisible text-sm mt-[1px] warningMessage text-red">
                This field is required.
              </p>
            </div>
            <div>
              <label
                className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                htmlFor="phoneNumber"
              >
                Phone number
              </label>
              <input
                required
                type="tel"
                id="phoneNumber"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.Phone}
                onChange={(e) =>
                  setVendor({ ...vendor, Phone: e.target.value })
                }
              />
              <p className=" invisible text-sm mt-[1px] warningMessage text-red">
                This field is required.
              </p>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-1">
            <div>
              <label className="  font-bold block" htmlFor="address_1">
                Address
              </label>
              <input
                type="text"
                id="address_1"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.AddressLine1}
                onChange={(e) =>
                  setVendor({ ...vendor, AddressLine1: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">Address Line 1</p>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-1">
            <div>
              <label
                className=" invisible  font-bold block"
                htmlFor="address_2"
              >
                Address
              </label>
              <input
                type="text"
                id="address_2"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.AddressLine2}
                onChange={(e) =>
                  setVendor({ ...vendor, AddressLine2: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">Address Line 2</p>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-2 gap-x-8">
            <div>
              <label
                className=" invisible  font-bold block"
                htmlFor="address_2"
              >
                Address
              </label>
              <input
                type="text"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.City}
                onChange={(e) => setVendor({ ...vendor, City: e.target.value })}
              />

              <p className="  text-sm mt-[.5rem]">City</p>
            </div>
            <div>
              <label
                className=" invisible  font-bold block"
                htmlFor="address_2"
              >
                Address
              </label>
              <input
                type="text"
                id="address_2"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.State}
                onChange={(e) =>
                  setVendor({ ...vendor, State: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">State / Province / Region</p>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-2 gap-x-8">
            <div>
              <label
                className=" invisible  font-bold block"
                htmlFor="address_2"
              >
                Address
              </label>
              <input
                type="number"
                id="postalCode"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.PostalCode}
                onChange={(e) =>
                  setVendor({ ...vendor, PostalCode: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">Postal Code</p>
            </div>
            <div>
              <label
                className=" invisible  font-bold block"
                htmlFor="address_2"
              >
                Address
              </label>

              <select
                id="countries"
                className=" border  border-softGray text-gray-900 text-sm rounded-md focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={vendor.Country}
                onChange={(e) =>
                  setVendor({ ...vendor, Country: e.target.value })
                }
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

              <p className="  text-sm mt-[.5rem]">Country</p>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-1 mt-8">
            <div>
              <label className="   font-bold block" htmlFor="skills">
                Skills
              </label>
              <textarea
                name="skills"
                id="skills"
                cols="30"
                rows="3"
                className=" border border-softGray w-[100%] px-2 rounded-md"
                value={vendor.Skills}
                onChange={(e) =>
                  setVendor({ ...vendor, Skills: e.target.value })
                }
              ></textarea>
              <p className="  text-sm ">
                Please indicate areas to vendor according to your skills
              </p>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-1 mt-8">
            <div>
              <label className="   font-bold block" htmlFor="areas">
                Areas of Interest
              </label>
              <textarea
                name="skills"
                id="areas"
                cols="30"
                rows="3"
                className=" border border-softGray w-[100%] px-2 rounded-md"
                value={vendor.InterestAreas}
                onChange={(e) =>
                  setVendor({ ...vendor, InterestAreas: e.target.value })
                }
              ></textarea>
              <p className="text-base mt-1 ">
                Please indicate areas of services you wish to provide.
              </p>
            </div>
          </div>

          <div className=" grid grid-cols-1">
            <div className=" my-4">
              <p className="   mt-[.5rem] font-bold">
                Non-refundable Application Fee{" "}
              </p>
              <p className="  text-base ">Price: $ 349.00</p>
            </div>
          </div>

          <div className=" grid grid-cols-1 my-6">
            <label
              className=" after:content-['*'] after:text-red   font-bold block"
              htmlFor="areas"
            >
              Cradit Card
            </label>
            <div>
              <CardElement className=" border p-3  rounded-md" />
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-x-8 mb-6">
            <div>
              <label
                className=" font-bold after:content-['*'] after:text-red  after:pl-1 block"
                htmlFor="name"
              >
                Billing Address
              </label>
              <input
                type="text"
                id="name"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.BillingFirstName}
                onChange={(e) =>
                  setVendor({ ...vendor, BillingFirstName: e.target.value })
                }
                required
              />
              <p className=" text-sm mt-2 my-2">First</p>
              {/* <p className=" text-sm mt-[1px] warningMessage text-red  ">
                This field is required.
              </p> */}
            </div>
            <div>
              <label className="   invisible font-bold after:content-['*'] after:text-red  block">
                Name
              </label>
              <input
                required
                type="text"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.BillingLastName}
                onChange={(e) =>
                  setVendor({ ...vendor, BillingLastName: e.target.value })
                }
              />
              <p className=" text-sm mt-2">Last</p>
            </div>
          </div>
          <div className=" grid grid-cols-1 my-2">
            <div>
              <input
                type="text"
                id="address_1"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.BillingAdressline1}
                onChange={(e) =>
                  setVendor({ ...vendor, BillingAdressline1: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">Address Line 1</p>
            </div>
          </div>
          <div className=" grid grid-cols-1">
            <div>
              <input
                type="text"
                id="address_1"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.BillingAdressline2}
                onChange={(e) =>
                  setVendor({ ...vendor, BillingAdressline2: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">Address Line 2</p>
            </div>
          </div>

          {/* ///////// */}
          <div className=" grid grid-cols-2 gap-x-8">
            <div>
              <input
                type="text"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.BillingCity}
                onChange={(e) =>
                  setVendor({ ...vendor, BillingCity: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">City</p>
            </div>
            <div>
              <input
                type="text"
                id="address_2"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.BillingState}
                onChange={(e) =>
                  setVendor({ ...vendor, BillingState: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">State / Province / Region</p>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-2 gap-x-8">
            <div>
              <input
                type="number"
                id="postalCode"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={vendor.BillingPostal}
                onChange={(e) =>
                  setVendor({ ...vendor, BillingPostal: e.target.value })
                }
              />

              <p className="  text-sm mt-[.5rem]">Postal Code</p>
            </div>
            <div>
              <select
                id="countries"
                className=" border  border-softGray text-gray-900 text-sm rounded-md focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={vendor.BillingCountry}
                onChange={(e) =>
                  setVendor({ ...vendor, BillingCountry: e.target.value })
                }
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

              <p className="  text-sm mt-[.5rem]">Country</p>
            </div>
          </div>
          {/* ///////// */}

          {/* ///////// */}
          <div className=" grid grid-cols-1 mt-6">
            <Button
              type="submit"
              className=" bg-black rounded-md w-[40%] xl:w-[20%] shadow-none capitalize text-base hover:shadow-none   font-normal text-primary
            "
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default vendor_Contact;
