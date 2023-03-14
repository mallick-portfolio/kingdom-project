import React from "react";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { HiArrowTrendingUp } from "react-icons/hi2";
import Petition_Contact from "./Petition_Contact";

import Flag from "../../img/KushFlag.jpg"


const Petition = () => {
  return (
    <section className="lg:w-[1280px] lg:mx-auto">
      <div className="mx-[3rem]">
        <h1 className="text-center font-bold lg:text-[3rem] text-[1.8rem] pb-4">
          Recognition of the Kingdom of Kush as a Sovereign State
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 ">
          <div className="h-[400px] lg:mr-[3rem] rounded-lg lg:col-span-3">
            <Image
              src={Flag}
              alt="flag"
              height={400}
              width={400}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 col-span-1">
            <div className="flex flex-col gap-4 text-2xl py-8 lg:py-0">
              <h1 className="">
                <span className="font-bold">534 have signed.</span> Let's get to
                1,000!
              </h1>
              <div className="w-full h-5 bg-[#7f7e7e8e] rounded-full">
                <div className="w-2/3 h-full text-center text-xs text-white bg-gradient-to-r from-yellow-900 to-red rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="">
                <HiArrowTrendingUp className="h-8 w-8 p-1 rounded-full bg-green-800 text-white" />
              </div>
              <div>
                <h1 className="text-2xl">
                  <span className="text-lg font-bold">At 1000 signatures,</span>{" "}
                  this petition is more likely to be{" "}
                  <span className="font-bold">
                    Featured in recommendations!
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-4 mr-4">
                <CgProfile className="h-8 w-8 rounded-full bg-gray text-white" />
                <div>
                  <h1>
                    <span className="font-bold">Cepren Kywhnp</span> signed 13
                    hours ago
                  </h1>
                </div>
              </div>
              <div className="flex gap-4 mr-4">
                <CgProfile className="h-8 w-8 rounded-full bg-gray text-white" />
                <div>
                  <h1>
                    <span className="font-bold">Jamal Tabidi</span> signed 2
                    days ago
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="lg:pr-[3.1rem]">
          <div className="lg:grid  lg:grid-cols-4 my-10 flex flex-col-reverse lg:my-5 ">
            <div className="lg:col-span-3">
              <div className="flex gap-4 lg:mr-4 text-xl">
                <CgProfile className="h-8 w-8 rounded-full bg-gray text-white" />
                <div>
                  <h1>
                    <span className="font-bold text-blue-300 border-b">
                      kingdomofkush.org .
                    </span>{" "}
                    Started this petition{" "}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 my-4">
                <div className=" ">
                  <p className="font-bold">
                    To the office of the president of thte united states of
                  </p>
                  <p className="font-bold">America</p>
                  <p className="font-bold">White house</p>
                  <p className="font-bold">1600 pennsylvania avenue</p>
                  <p className="font-bold">Washington, DC 20515</p>
                </div>
                <div>
                  <p className="font-bold">
                    To the office of the house majority leader
                  </p>
                  <p className="font-bold">1226 Longworth h.o.b.</p>
                  <p className="font-bold">Washington, dc 20514</p>
                </div>
                <div>
                  <p className="font-bold">
                    To the office of the house majority leader
                  </p>
                  <p className="font-bold">1226 Longworth h.o.b.</p>
                  <p className="font-bold">Washington, dc 20514</p>
                </div>
                <p>(Hereafter collectively “Elected Officials” or “You”),</p>
                <p>
                  Dear Elected Officials, The Kingdom of Kush (“Kingdom”) is
                  proclaiming sovereignty in the territory of Bir Tawil in
                  accordance with the applicable international law. Bir Tawil (a
                  territory located between Egypt and Sudan) has not been
                  claimed by any state and therefore is what is referred to as
                  Terra Nullius "no man's land."
                </p>
                <p>
                  The Kingdom will attract and welcome people of all races and
                  religions. It will serve as an education and cutting edge
                  technology empowerment cradle for generations to come. The
                  Kingdom will help bring economic prosperity and social
                  stability to the entire continent.
                </p>
                <p>
                  In addition, with the Kingdom of Kush functioning as a
                  sovereign state, the African Diaspora will have the “right of
                  return” to a place it can call home. These efforts are in
                  accordance with the U.N. General Assembly Resolution 194 (III)
                  The Universal Declaration of Human Rights (10 December 1948).
                  Article 13(2) of the Universal Declaration of Human Rights
                  states: "Everyone has the right to leave any country,
                  including his own, and to return to his country." African
                  Diaspora as the "sixth region" of Africa exists in the
                  constitution of the African Union (“AU”).
                </p>
                <p>
                  Therefore, for the benefit of 41.6 million African Americans
                  in the United States, 1.6 billion people of African descent
                  around the world, and the entire human race, we, the
                  undersigned, hereby petition You, the Elected Officials, to
                  recognize the Kingdom of Kush as a sovereign state, establish
                  full diplomatic relations with the Kingdom, and support the
                  Kingdom and its efforts politically and socially.
                </p>
              </div>
            </div>
            {/* start petition form */}
            <div className="form lg:col-span-1 lg:ml-[3rem] w-full mb-10 lg:mb-0">
              <h1 className="font-bold text-xl text-center my-5">
                Sign this petition
              </h1>
              <div id="submitAPetition">
                <Petition_Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Petition;
