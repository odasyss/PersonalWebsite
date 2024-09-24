import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 hover-pop">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="BUSINESS SYSTEMS ANALYST"
            company=" LA Philharmonic"
            companyLink="https://google.com"
            time="2022-2023"
            address="Remote"
            work={
              <ul className="list-disc pl-5">
                <li className="hover-pop">-Analyzed large data sets and managed metadata in the Digital Asset Management System (DAMS), supporting data management in cloud and on-premises environments.</li>
                <li className="hover-pop">-Conducted data migrations, file inventories, and quality assurance testing, ensuring compliance with digital preservation best practices.</li>
                <li className="hover-pop">-Collaborated with users and technical staff to streamline procedures and communicate business requirements for IT projects.</li>
              </ul>
            }
          />

          <Details
            position={<a href="https://ascent.cysun.org/project/project/view/176" target="_blank" className="text-primary dark:text-primaryDark">Senior Design Capstone</a>}
            company="JPL"
            companyLink="https://trek.nasa.gov/?trk=public_profile_project-button#"
            time="2020-2021"
            address="California State University of Los Angeles"
            work={
              <ul className="list-disc pl-5">
                <li className="hover-pop">-Designed and developed networked visualization software that facilitates collaborative markup of 3D solar system terrain.</li>
                <li className="hover-pop">-Incorporated features such as waypoint creation, rapid navigation to waypoints, text annotations, and freehand ink annotations to enhance user interaction and collaborative exploration.</li>
              </ul>
            }
          />

          <Details
            position="Software Developer Intern"
            company="Sift"
            companyLink="N/A"
            time="Summer 2019"
            address="Remote."
            work={
              <ul className="list-disc pl-5">
                <li className="hover-pop">-Assisted in the integration of RESTful APIs, enhancing data retrieval and processing efficiency.</li>
                <li className="hover-pop">-Participated in daily stand-up meetings and contributed to agile methodologies, promoting continuous improvement and team collaboration.</li>
                <li className="hover-pop">-Documented software requirements and user manuals.</li>
              </ul>
            }
          />

          <Details
            position="Technician"
            company="Cortes Auto Glass"
            companyLink="https://www.yelp.com/biz/cortés-auto-glass-los-angeles-3"
            time="2016-2019"
            address="Los Angeles"
            work={
              <ul className="list-disc pl-5">
                <li className="hover-pop">-Developed and implemented a comprehensive database to streamline inventory management, enhancing accuracy and accessibility of inventory data.</li>
                <li className="hover-pop">-Increased productivity during peak weekend hours by 25% through efficient inventory tracking and real-time updates, ensuring staff could focus on customer service.</li>
                <li className="hover-pop">-Improved Yelp visibility and customer engagement by optimizing product information and availability, leading to a measurable increase in online interactions.</li>
              </ul>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
