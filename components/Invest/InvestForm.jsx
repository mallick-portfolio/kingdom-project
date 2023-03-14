import React, { useEffect, useState, useContext } from "react";
import { Alert } from "@material-tailwind/react";
import { InvextContext } from "@/context/InvestContext";

function InvestForm() {
  const { invest, setInvest, InvestInitial, postInvest } =
    useContext(InvextContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="InvestForm">
      <div className="container px-[2rem] lg:px-[3rem] mx-auto md:mt-16">
        <div className=" shadow-xl min-h-[20rem] p-[2rem] lg:p-[3rem] ">
          <form action="submit" onSubmit={handleSubmit}>
            <div className="grid  md:justify-items-start mdjustify-items-center    rounded-md border-l-4 border-[#eaeaea] grid-cols-1  space-y-5  md:space-y-0   md:grid-cols-2 md:space-x-8  p-[1rem]  bg-[#fbfbfb]">
              <div className="w-[100%]">
                <input
                  type="text"
                  className=" w-[100%]  placeholder-black border-l-2 border-red bg-[#eaeaea] text-black px-2 py-2"
                  placeholder="First Name"
                  value={invest.FirstName}
                  onChange={(e) =>
                    setInvest({ ...invest, FirstName: e.target.value })
                  }
                />
                <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  Name is required..
                </Alert>
              </div>
              <div className="w-[100%]">
                <input
                  type="text"
                  className=" w-[100%] placeholder-black border-l-2 border-red bg-[#eaeaea] text-black px-2 py-2"
                  placeholder="Last Name"
                  value={invest.LastName}
                  onChange={(e) =>
                    setInvest({ ...invest, LastName: e.target.value })
                  }
                />
                <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  Name is required..
                </Alert>
              </div>
            </div>

            <div className="grid  mt-8 md:justify-items-start mdjustify-items-center    rounded-md border-l-4 border-[#eaeaea] grid-cols-1  space-y-5  md:space-y-0   md:grid-cols-2 md:space-x-8 p-[1rem]  bg-[#fbfbfb]">
              <div className="w-[100%]">
                <input
                  type="email"
                  className=" w-[100%]  placeholder-black border-l-2 border-red bg-[#eaeaea] text-black px-2 py-2"
                  placeholder="Email"
                  value={invest.Email}
                  onChange={(e) =>
                    setInvest({ ...invest, Email: e.target.value })
                  }
                />
                <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  Email is required..
                </Alert>
              </div>
              <div className="w-[100%]">
                <input
                  type="number"
                  className=" w-[100%] placeholder-black border-l-2 border-red bg-[#eaeaea] text-black px-2 py-2"
                  placeholder="Phone"
                  value={invest.Phone}
                  onChange={(e) =>
                    setInvest({ ...invest, Phone: e.target.value })
                  }
                />
                <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  Please input a valid international phone number.
                </Alert>
              </div>
            </div>

            <div className="mt-8     rounded-md border-l-4 border-[#eaeaea] p-[1rem] bg-[#fbfbfb]">
              <div className="grid gap-2 md:grid-cols-3">
                <div>
                  <h4 className="text-[18px] font-bold text-[#777771] mb-3">
                    Project categories *
                  </h4>
                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      className="mr-2 w-4 h-5  accent-black"
                      value={"Agriculture"}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <label className="text-[14px]">Agriculture</label>
                  </div>

                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      value={`Houseing`}
                      className="mr-2 w-4 h-5  accent-black"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <label className="text-[14px]">Houseing</label>
                  </div>

                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      value={`Clean Water`}
                      className="mr-2 w-4 h-5  accent-black"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <label className="text-[14px]">Clean Water</label>
                  </div>
                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      value={"Healthcare"}
                      className="mr-2 w-4 h-5  accent-black"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <label className="text-[14px]">Healthcare</label>
                  </div>
                  <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                    This field is required. Please select a value.
                  </Alert>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#777771] mb-3">
                    Investor Type *
                  </h4>

                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type="radio"
                      value=""
                      className="mr-2 w-5 h-5  accent-black"
                    />
                    <label className="text-[14px]">Individual</label>
                  </div>
                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type="radio"
                      value=""
                      className="mr-2 w-5 h-5  accent-black"
                    />
                    <label className="text-[14px]">usiness/ Corporation</label>
                  </div>
                  <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                    This field is required. Please select a value.
                  </Alert>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#777771] mb-3">
                    Preferred Investment Location *
                  </h4>

                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      className="mr-2 w-4 h-5  accent-black"
                    />
                    <label className="text-[14px]">Angola</label>
                  </div>
                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      className="mr-2 w-4 h-5  accent-black"
                    />
                    <label className="text-[14px]">Benin</label>
                  </div>
                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      className="mr-2 w-4 h-5  accent-black"
                    />
                    <label className="text-[14px]">Burkina Faso</label>
                  </div>
                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      className="mr-2 w-4 h-5  accent-black"
                    />
                    <label className="text-[14px]">DRC</label>
                  </div>
                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      className="mr-2 w-4 h-5  accent-black"
                    />
                    <label className="text-[14px]">Guinea</label>
                  </div>
                  <div className="flex gap-2 items-center mb-4">
                    <input
                      type={"checkbox"}
                      className="mr-2 w-4 h-5  accent-black"
                    />
                    <label className="text-[14px]">Indonesia</label>
                  </div>
                  <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                    This field is required. Please select a value.
                  </Alert>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 items-center gap-4">
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#777771]">
                    Preferred Investment Amount (USD) *
                  </label>
                  <input
                    type={"number"}
                    className="bg-[#EDEDED] px-3 py-3 text-black"
                    placeholder="Amount"
                  />
                  <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                    This field is required. Please select a value.
                  </Alert>
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#777771] ">
                    Preferred Investment Start Time *
                  </label>
                  <select className="bg-[#EDEDED] px-3 py-3">
                    <option>1 week</option>
                    <option>2 week</option>
                  </select>
                  <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                    This field is required. Please select a value.
                  </Alert>
                </div>
              </div>
            </div>

            <button
              className="bg-[#333333] text-[#fff] font-medium text-[14px] px-3 py-2 rounded-sm mt-8"
              type="button"
            >
              I am Interested in Investing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InvestForm;
