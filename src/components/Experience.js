import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <ul className="font-medium w-full list-disc ml-8 mt-2">{work}</ul>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex  flex-col items-start justify-between ml-4">
          <Details
            position="Web Developer (Intern)"
            company="ExCode"
            companyLink="https://excode.net/"
            time="Feb, 2023 - April, 2023"
            address="Barishal, Bangladesh"
            work={
              <>
                <li>Worked on an existing LMS project.</li>
                <li>
                  Developed a landing page and features such as Student
                  attendance, tables etc.
                </li>
                <li>
                  Troubleshot and debugged issues within the project codebase.
                </li>
                <li>Created UI test report using google sheets.</li>
              </>
            }
            // work="Work on a team responsible for developing new features and bug fixing for their in house LMS projects iKra.my"
          />
          <div></div>
          {/* <Details
            position="Web Developer (Intern)"
            company="ExCode"
            companyLink="https://excode.net/"
            time="Feb, 2023 - Present"
            address="Barishal, Bangladesh"
            work="Work on a team responsible for developing new features and bug fixing for their in house LMS projects iKra.my"
          />
          <Details
            position="Web Developer (Intern)"
            company="ExCode"
            companyLink="https://excode.net/"
            time="Feb, 2023 - Present"
            address="Barishal, Bangladesh"
            work="Work on a team responsible for developing new features and bug fixing for their in house LMS projects iKra.my"
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
