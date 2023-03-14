import React from "react";
import styles from "../../styles/styles.module.css";

function WorkInquiries() {
  return (
    <section className="WorkInquiries">
      <div
        className={`${styles.workBg}  min-h-[28rem] xl:min-h-[35rem] flex items-center justify-center`}
      >
        <div className="container">
          <div className="box lg:max-w-[25rem] my-8 lg:my-0 sm:max-w-[15rem] w-full px-8 py-2 pb-[6rem] bg-[#00000070] text-white">
            <h5 className="text-base pt-2">WORK INQUIRIES</h5>
            <h1 className="text-[2rem] xl:text-[3rem] leading-[2.2rem] lg:leading-[3.2rem] xl:pr-[10rem] font-bold">
              African Diaspora
            </h1>
            <p className="text-base leading-relaxed mt-4">
              African country, the Kingdom of Kush will also be established as a
              place to experience a homecoming for all people of African
              descent. The African diaspora is invited to live, learn, work,
              invest, and prosper in the Kingdom, and as a result, in the region
              and the entire continent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkInquiries;
