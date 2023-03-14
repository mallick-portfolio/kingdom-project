import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Petition_Contact = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/petition_application");
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div>
        <label
          className="  font-bold  after:text-red  after:pl-1 block"
          htmlFor="name"
        >
          First Name
        </label>
        <input
          type="text"
          id="name"
          className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
          required
        />
        <p className=" text-sm mt-[1px] text-red invisible">
          This field is required.
        </p>
      </div>
      <div>
        <label className="  font-bold  after:pl-1 block" htmlFor="name">
          Last Name
        </label>
        <input
          type="text"
          id="name"
          className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
          required
        />
        <p className=" text-sm mt-[1px] text-red invisible">
          This field is required.
        </p>
      </div>
      <div>
        <label className="  font-bold  after:pl-1 block" htmlFor="Email">
          Email
        </label>
        <input
          type="email"
          id="Email"
          className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
          required
        />
        <p className=" text-sm mt-[1px] text-red invisible">
          This field is required.
        </p>
      </div>
      <div>
        <label className="  font-bold  after:pl-1 block" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
          required
        />
        <p className=" text-sm mt-[1px] text-red invisible">
          This field is required.
        </p>
      </div>
      <div>
        <label className="block text-gray-500" for="remember">
          <input
            className="mr-6 leading-tight w-5 h-5 rounded-xl"
            type="checkbox"
            id="remember"
            name="remember"
          />
          <span className="text-[18px]">
            Display my name and comment on this petition
          </span>
        </label>
      </div>
      <button className="cursor-pointer py-2 px-4 block mt-6 bg-red text-white font-bold w-full text-center rounded">
        Sign this petition
      </button>
    </form>
  );
};

export default Petition_Contact;
