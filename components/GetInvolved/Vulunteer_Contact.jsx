import React, { useContext, useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { VolunteerContext } from "@/context/VolunteerContext";
import toast, { Toaster } from "react-hot-toast";
import Styles from "../../styles/styles.module.css";

const notify = () =>
  toast.success("Your is created sucessfully!", {
    duration: 2000,
    position: "bottom-right",
  });
  

function Vulunteer_Contact() {
  const { volunteer, setVolunteer, postVolunteers, volunteerInitial } =
    useContext(VolunteerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVolunteer(volunteerInitial);
    postVolunteers();
  };

  return (
    <div className=" container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem] ">
      <Toaster />

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
                value={volunteer.FirstName}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, FirstName: e.target.value })
                }
                required
              />
              <p className=" text-sm mt-2">First</p>
              <p className=" text-sm mt-[1px] warningMessage text-red  ">
                This field is required.
              </p>
            </div>
            <div>
              <label className="   invisible font-bold after:content-['*'] after:text-red  block">
                Name
              </label>
              <input
                required
                type="text"
                className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                value={volunteer.LastName}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, LastName: e.target.value })
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
                value={volunteer.Email}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, Email: e.target.value })
                }
              />
              <p
                className={`  text-sm mt-[1px] ${Styles.warningMessage} text-red`}
              >
                This field is required.
              </p>
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
                value={volunteer.DateofBirth}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, DateofBirth: e.target.value })
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
                value={volunteer.Phone}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, Phone: e.target.value })
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
                value={volunteer.AddressLine1}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, AddressLine1: e.target.value })
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
                value={volunteer.AddressLine2}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, AddressLine2: e.target.value })
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
                value={volunteer.City}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, City: e.target.value })
                }
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
                value={volunteer.State}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, State: e.target.value })
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
                value={volunteer.PostalCode}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, PostalCode: e.target.value })
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
                value={volunteer.Country}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, Country: e.target.value })
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
                value={volunteer.Skills}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, Skills: e.target.value })
                }
              ></textarea>
              <p className="  text-sm ">
                Please indicate areas to volunteer according to your skills
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
                value={volunteer.InterestAreas}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, InterestAreas: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-1 mt-8">
            <div>
              <label
                className="  after:content-['*'] after:text-red after:pl-2  font-bold block"
                htmlFor="address_2"
              >
                Place of Interest
              </label>

              <select
                id="countries"
                className=" border  border-softGray text-gray-900 text-sm rounded-md focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={volunteer.InterestPlace}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, InterestPlace: e.target.value })
                }
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          {/* ///////// */}
          <div className=" mt-6">
            <h1
              className=" text-[1.5rem] font-bold
          mb-4"
            >
              Emergency Information
            </h1>
            <div className=" grid grid-cols-2 gap-x-8 mb-6">
              <div>
                <label
                  className="  font-bold after:content-['*'] after:text-red  after:pl-1 block"
                  htmlFor="e_email"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="e_email"
                  className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                  value={volunteer.EmergencyEmail}
                  onChange={(e) =>
                    setVolunteer({
                      ...volunteer,
                      EmergencyEmail: e.target.value,
                    })
                  }
                />
                <p className=" text-sm mt-[1px] warningMessage text-red invisible">
                  This field is required.
                </p>
              </div>
              <div>
                <label
                  className="   font-bold after:content-['*'] after:text-red  block"
                  htmlFor="e_phone"
                >
                  Phone
                </label>
                <input
                  required
                  type="number"
                  id="e_phone"
                  className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[1px]"
                  value={volunteer.EmergencyPhone}
                  onChange={(e) =>
                    setVolunteer({
                      ...volunteer,
                      EmergencyPhone: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          {/* ///////// */}
          <div className=" grid grid-cols-1 mt-6">
            <Button
              onClick={notify}
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

export default Vulunteer_Contact;
