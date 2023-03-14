import React, { useState, useEffect } from "react";
import Style from "../styles/styles.module.css";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
//import next hoc
import Image from "next/image";
import Link from "next/link";
// import react icons
import { CgMenuLeftAlt } from "react-icons/cg";
// imports image
import logo from "../img/logo.png";
// imports MT
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { IoIosArrowDown } from "react-icons/io";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const route = useRouter();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setScroll(true);
      } else if (window.screenY === 0) {
        setScroll(false);
      }
    });
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h4"
        className={`${
          (!scroll && route.pathname === "/") ||
          (!scroll && route.pathname === "/contact")
            ? "text-white"
            : "text-black"
        }  p-1 font-normal`}
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${
          (!scroll && route.pathname === "/") ||
          (!scroll && route.pathname === "/contact")
            ? "text-white"
            : "text-black"
        }  p-1 font-normal`}
      >
        <Link href={"/aboutus"} className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${
          (!scroll && route.pathname === "/") ||
          (!scroll && route.pathname === "/contact")
            ? "text-white"
            : "text-black"
        }  p-1 font-normal`}
      >
        <Menu>
          <MenuHandler>
            <Button
              ripple={false}
              className={`
              ${
                (!scroll && route.pathname === "/") ||
                (!scroll && route.pathname === "/contact")
                  ? "text-white"
                  : "text-black"
              }
             
              capitalize  px-0 font-normal hover:shadow-none shadow-none text-[1rem] bg-transparent flex  items-center`}
            >
              Get Involved
              <IoIosArrowDown
                className={`text-[1rem]  ${
                  (!scroll && route.pathname === "/") ||
                  (!scroll && route.pathname === "/contact")
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList>
            <Link
              href={"/membership_applicationt"}
              className={"[&>button]:outline-0 "}
            >
              <MenuItem className="  text-[.9rem]  text-primary hover:text-primary active:text-primary overflow-hidden">
                Membership
              </MenuItem>
            </Link>

            <Link href={"/volunteer"} className={"[&>button]:outline-0 "}>
              <MenuItem className="  outline-none text-[.9rem]  text-primary hover:text-primary active:text-primary">
                Volunteer
              </MenuItem>
            </Link>
            <Link href={"/vendor"} className={"[&>button]:outline-0 "}>
              <MenuItem className="  text-[.9rem]  text-primary hover:text-primary active:text-primary">
                Vendor
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${
          (!scroll && route.pathname === "/") ||
          (!scroll && route.pathname === "/contact")
            ? "text-white"
            : "text-black"
        }  p-1 font-normal`}
      >
        <Link href={`/petition`} className="flex items-center">
          Petition
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${
          (!scroll && route.pathname === "/") ||
          (!scroll && route.pathname === "/contact")
            ? "text-white"
            : "text-black"
        }  p-1 font-normal`}
      >
        <Link href={`/project`} className="flex items-center">
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${
          (!scroll && route.pathname === "/") ||
          (!scroll && route.pathname === "/contact")
            ? "text-white"
            : "text-black"
        }  p-1 font-normal`}
      >
        <Link href={`/invest`} className="flex items-center">
          Invest
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${
          (!scroll && route.pathname === "/") ||
          (!scroll && route.pathname === "/contact")
            ? "text-white"
            : "text-black"
        }  p-1 font-normal`}
      >
        <Link href={`/donation`} className="flex items-center">
          Donation
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${
          (!scroll && route.pathname === "/") ||
          (!scroll && route.pathname === "/contact")
            ? "text-white"
            : "text-black"
        }  p-1 font-normal`}
      >
        <Link href={`/contact`} className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      {route.pathname === "/" || route.pathname === "/contact" ? (
        <div
          className={`${
            scroll ? "bg-white  fixed" : "bg-[#00000050] absolute top-0 left-0"
          } w-[100%]    transition-all duration-400  z-[999] `}
        >
          <div className="container shadow-none max-w-[96%]  h-[5rem]  mx-auto flex items-center justify-between  ">
            <div className=" logo__box flex  items-center   space-x-6">
              <div>
                <span
                  className="  rounded-full p-2   "
                  onClick={() => {
                    setOpenNav(true);
                  }}
                >
                  <CgMenuLeftAlt
                    className={` border-solid hover:border-[1px] border-primary text-[3.2rem] cursor-pointer bg-[#8484842c] rounded-full p-2 transition-all ${
                      (!scroll && route.pathname === "/") ||
                      (!scroll && route.pathname === "/contact")
                        ? "text-white"
                        : "text-black"
                    }`}
                  />
                </span>
              </div>
              <Link href={"/"}>
                <Image src={logo} width={50} height={50} alt="logo" />
              </Link>
            </div>

            <div className="hidden lg:block ">{navList}</div>

            <div>
              <form action="/action_page.php">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  text-base"
                >
                  <option defaultValue="Choose a Languge">
                    Choose a Languge
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            scroll ? " fixed  " : "static  "
          } w-[100%]  bg-white   transition-all duration-400  z-[999] `}
        >
          <div
            className={`
          ${scroll ? "h-[5rem]" : "h-[7rem]"}  
          container shadow-none max-w-[96%]  mx-auto flex items-center justify-between `}
          >
            <div className=" logo__box flex  items-center   space-x-6">
              <div>
                <span
                  className="  rounded-full p-2   "
                  onClick={() => {
                    setOpenNav(true);
                  }}
                >
                  <CgMenuLeftAlt
                    className={` border-solid hover:border-[1px] border-primary text-[3.2rem] cursor-pointer bg-[#8484842c] rounded-full p-2 transition-all ${
                      scroll || route.pathname != "/"
                        ? "text-black"
                        : "text-white"
                    }`}
                  />
                </span>
              </div>
              <Link href={"/"}>
                <Image src={logo} width={50} height={50} alt="logo" />
              </Link>
            </div>

            <div className="hidden lg:block ">{navList}</div>

            <div>
              <form action="/action_page.php">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  text-base"
                >
                  <option selected>Choose a Languge</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* // mobile menu */}
      <div
        className={`mobile__menu  w-[100%]  overflow-hidden h-[100%]  top-0 left-0  bg-black  fixed ${
          openNav ? "block" : "hidden"
        }  transition-all  duration-500 z-[9999]`}
      >
        <div className="menu_wrapper p-10 text-white">
          <RxCross2
            className="ml-3 text-[1.5rem] cursor-pointer"
            onClick={() => setOpenNav(false)}
          />
          <ul className="  capitalize  flex flex-col space-y-4 mt-6 ml-5">
            <li className=" font-bold lg:text-[2.5rem] text-[1rem] text-[#CB9833] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/"}> Home</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/aboutus"}>About</Link>
            </li>
            <li
              className={`font-bold lg:text-[2.5rem] text-[1rem]  hover:translate-x-4  hover:opacity-70 transition-all ${Style.child_nav} duration-300 relative text-[#CB9833] flex  items-center  `}
            >
              Get Involved
              <AiOutlinePlus className=" ml-[1rem] text-white text-[1rem]" />
              <ul className=" ml-[10rem] translate-y-[6rem]   opacity-0 transition-all  delay-[80ms]  text-[1rem] lg:text-[2.5rem] absolute top-0 lg:left-[8%] left-[10%] text-white">
                <li>
                  <Link href={"/membership_applicationt"}>Membership</Link>
                </li>
                <li>
                  <Link href={"/volunteer"}>Volunteer</Link>
                </li>
                <li>
                  <Link href={"/vendor"}>Vendor</Link>
                </li>
              </ul>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/petition"}>Petition</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/project"}>Projects</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/invest"}>Invest</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/donation"}>Donation</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
