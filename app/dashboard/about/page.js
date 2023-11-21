"use client";

import React from "react";
import NavControls from "../../components/NavControls";
import PageTitle from "../../components/PageTitle";
import SkillsBar from "../../components/SkillsBar";
import Subtitle from "../../components/Subtitle";
import Timeline from "../../components/Timeline";
import Navbar from "../../components/Navbar";
import Complements from "../../components/Complements";

const About = () => {
  return (
    <div className="w-full flex justify-center text-center">
      <Navbar hambColor="text-[191d2b]" />
      <div className="hidden absolute right-0 top-[35%] mr-[26px] lg:block">
        <NavControls />
      </div>
      <div className="flex flex-col justify-center items-center text-xl w-[90%] md:w-[80%]">
        <div>
          <PageTitle title="About Me" />
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-start lg:mt-20">
          <div className="w-[90%] mb-20 text-sm text-justify leading-10 lg:w-1/2 xl:text-lg lg:text-left xl:w-1/3 lg:mb-32">
            <p className=" mt-24">
              My life wasn't always been in Web Development. I studied Sports
              Science and started work as a teacher, but never fulfilled my
              dreams and expectations with that job, so I started thinking about
              changing my life...
            </p>
            <p className="mt-4">
              I always love{" "}
              <span className="text-xl xl:text-2xl ">challenges</span> and to
              <span className="text-xl xl:text-2xl "> solve problems!</span>
            </p>
            <p className="mt-4">
              So 4 years ago, I started studying Web Development and I just love
              it! I always liked to work with computers and{" "}
              <span className="text-xl xl:text-2xl ">I loved to learn</span>, so
              I started my journey!
            </p>
            <p className="mt-4">
              It was not easy, and{" "}
              <span className="text-xl xl:text-2xl ">
                to do it all by myself
              </span>{" "}
              was even harder, but I believe it helped me to be
              <span className="text-xl xl:text-2xl "> more prepared</span> and
              ready for all the difficulties that are coming by!
            </p>
          </div>
          <div className="about-item grid grid-cols-2 w-[90%] gap-2 text-xl font-bold lg:w-1/3 lg:mt-64 lg:h-20 xl:mt-32">
            <Complements
              adj="Love to Learn"
              class="hover:-translate-x-2 hover:-translate-y-2"
            />
            <Complements
              adj="Team Worker"
              class="hover:translate-x-2 hover:-translate-y-2"
            />
            <Complements
              adj="Hard Worker"
              class="hover:-translate-x-2 hover:translate-y-2"
            />
            <Complements
              adj="Self-taught"
              class="hover:translate-x-2 hover:translate-y-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[80%] md:w-[100%] lg:w-[90%]">
          <div className="w-[80%] xl:w-[70%]">
            <Subtitle title="My Skills" />
          </div>
          <div className="grid gap-8 place-items-center grid-cols-1 w-[100%] mb-32 md:grid-cols-2 md:gap-y-18 md:gap-x-32 xl:gap-y-24">
            <SkillsBar lang="HTML" count="80" />
            <SkillsBar lang="JS" count="80" />
            <SkillsBar lang="CSS" count="70" />
            <SkillsBar lang="Tailwind" count="70" />
            <SkillsBar lang="React" count="70" />
            <SkillsBar lang="Python" count="60" />
            <SkillsBar lang="Bootstrap" count="60" />
            <SkillsBar lang="C++" count="50" />
            <SkillsBar lang="Flask" count="50" />
          </div>
          <div className="w-[80%] lg:w-[70%]">
            <Subtitle title="Timeline" />
          </div>
          <div className="flex flex-col w-[100%] justify-between items-center lg:flex-row ">
            <div className="grid grid-cols-1 gap-y-20 gap-x-64 place-items-center text-left w-[90%] mb-44 ml-6 mt-20 md:gap-x-10 lg:w-[50%] xl:ml-24 relative ">
              <h1 className="text-xl justify-start -rotate-90 absolute bottom-[50%] -left-20 lg:-left-14">
                Work
              </h1>
              <Timeline
                date="2009 to 2019"
                course="Waiter"
                description="I started working part-time while studying"
              />
              <Timeline
                date="2019 to 2022"
                course="Sport Teacher and Coach"
                description="My first jobs as in Education"
              />
              <Timeline
                date="2022 to 2023"
                course="Elementary Web Developer Teacher"
                description="While studying I had the opportunity to work as Teacher in Web Dev"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-20 gap-x-64 place-items-center text-left w-[100%] mb-44 ml-6 mt-20 md:gap-x-10 lg:w-[50%] xl:ml-24 relative ">
              <h1 className="text-xl justify-start -rotate-90 absolute bottom-[50%] -left-20 lg:-left-14">
                Study
              </h1>
              <Timeline
                date="2019 to 2020"
                course="CS50: Introduction to Computer Science"
                description="My first course in Web Dev where i learn the basics of C++, Python, HTML and CSS!"
              />
              <Timeline
                date="2020 to 2022"
                course="CodeAcademy - Full-Stack Engineer"
                description="Learn more about HTML, CSS, JavaScript and React"
              />
              <Timeline
                date="2022 to 2023"
                course="Scrimba - Learn React Course"
                description="Lastly I focused more in React while I keep learning other frameworks like Next.js and Tailwind CSS"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
