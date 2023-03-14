import React from "react";

const Application = () => {
  return (
    <div className=" container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem] ">
      <div>
        <h1
          className=" text-[1.5rem] font-bold
        mb-4"
        >
          Add your name to show your support for the campaign for action!
        </h1>
        <form action="">
          <div className="grid grid-cols-2 gap-x-8 mb-5">
            <div>
              <label
                className="  font-bold after:content-['*'] after:text-red  after:pl-1 block"
                htmlFor="name"
              >
                First Name
              </label>
              <input
                type="text"
                id="name"
                className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <label
                className="  font-bold after:content-['*'] after:text-red  after:pl-1 block"
                htmlFor="name"
              >
                Last Name
              </label>
              <input
                required
                type="text"
                className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
              />
            </div>
          </div>

          {/* ///////// */}
          <div className=" grid grid-cols-1 mb-5">
            <div>
              <label
                className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                htmlFor="address_1"
              >
                Street Address
              </label>
              <input
                type="text"
                id="address_1"
                className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
              />
            </div>
          </div>

          {/* ///////// */}
          <div className=" grid grid-cols-1 mb-5">
            <label className="after:pl-1 font-bold block" htmlFor="address_2">
              Address Line 2
            </label>
            <input
              type="text"
              id="address_2"
              className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
            />
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-5 mb-5">
            <div>
              <label
                className="  after:pl-1   font-bold after:content-['*'] after:text-red block"
                htmlFor="zipCode"
              >
                Zip Code
              </label>
              <input
                required
                type="text"
                placeholder="Zip Code"
                title="Please enter a Zip Code"
                pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
                id="zipCode"
                className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
              />
              <p className=" invisible text-sm mt-[1px] text-red">
                This field is required.
              </p>
            </div>
            <div>
              <label
                className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                required
                type="number"
                id="phoneNumber"
                className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
              />
              <p className=" invisible text-sm mt-[1px] text-red">
                This field is required.
              </p>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-x-5 mb-5">
            <div className="col-span-2">
              <label
                className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                htmlFor="zipCode"
              >
                Email Address
              </label>
              <input
                required
                type="text"
                placeholder="e-mail"
                title="Please enter a your email"
                id="zipCode"
                className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
              />
              <p className=" invisible text-sm mt-[1px] text-red">
                This field is required.
              </p>
            </div>
          </div>

          {/* ///////// */}
          <div className=" grid grid-cols-1 mb-5">
            <div class="mb-5">
              <label
                className="after:pl-1 font-bold block mb-2 after:content-['*'] after:text-red"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                rows="5"
                cols="40"
                className="border p-2 border-softGray w-[100%] rounded-sm"
              ></textarea>
            </div>
          </div>

          {/* ///////// */}
          <div className=" grid grid-cols-1 mb-5">
            <label
              className="after:pl-1 font-bold block after:content-['*'] after:text-red"
              htmlFor="address_2"
            >
              Signature
            </label>
            <div class="mb-5">
              <input type="file" name="file" id="file" class="sr-only" />
              <label
                for="file"
                class="relative w-full flex min-h-[200px] items-center justify-center rounded-sm border border-[#e0e0e0] p-12 text-center"
              >
                <div className="absolute border-b border-[#cdcbcb] w-[80%] mx-10"></div>
              </label>
            </div>
          </div>

          {/* ///////// */}
          <div className=" grid grid-cols-1 mt-6">
            <button
              type="submit"
              className=" bg-black rounded-sm  shadow-none capitalize text-base hover:shadow-none w-[40%] xl:w-[20%]    font-normal text-primary py-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
