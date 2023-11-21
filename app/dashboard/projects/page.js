import React from "react";
import NavControls from "../../components/NavControls";
import WorkCard from "../../components/WorkCard";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
const Projects = () => {
  return (
    <div>
      <Navbar hambColor="text-[#191d2b]" />
      <div className="hidden absolute right-0 top-[35%] mr-12 lg:block">
        <NavControls />
      </div>
      <div className="flex flex-col items-center w-[100%]">
        <div className="left h-1/3 w-full relative">
          <div className="flex flex-col justify-evenly w-full items-center h-full">
            <div className="flex flex-col justify-center items-center text-center mt-24 mx-5">
              <PageTitle title="Projects" />
            </div>{" "}
            <h1 className="text-md my-24 xl:text-2xl w-[70%] lg:w-[50%]">
              Here are some of the projects I have done since I started studying
              from the courses that I did!
            </h1>
          </div>
        </div>
        <div className="right w-[100%] mt-10">
          <div className="w-full px-4 ">
            <div className="max-w-[50%] mx-auto grid text-center mb-10 lg:max-w-[70%] lg:grid-cols-2 gap-20 gap-y-12 xl:grid-cols-3 xl:gap-20">
              <WorkCard
                link="https://github.com/me50/ricardomreis22.git"
                title="Padel Tournament"
                lang="Python, HTML, CSS, Flask"
                info="Final project of the course 'CS50: Introduction to Computer Science' creating a Padel Club!"
              />
              <WorkCard
                link="https://github.com/ricardomreis22/notepad.git"
                title="Notepad"
                lang="HTML, CSS, React"
                info="A small project where I have to finish a notepad app!"
              />
              <WorkCard
                link="https://github.com/ricardomreis22/Tenzies-Game.git"
                title="Tenzies Game"
                lang="HTML, CSS, React"
                info="A project where I have done a game with the objetive of getting all numbers equal!"
              />
              <WorkCard
                link="https://github.com/ricardomreis22/Quizzical.git"
                title="Quizzical"
                lang="HTML, CSS, React"
                info="The final project of the first react course where I did a Quiz app!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
