import React from "react";
import NavControls from "../../components/NavControls";
import WorkCard from "../../components/WorkCard";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
const Projects = () => {
  const tenziesLang = ["HTML", "Tailwind Css", "JS", "React", "Next.js"];
  const PadelLang = ["HTML", "Python", "Css", "Flask"];
  return (
    <div>
      <Navbar />
      <div className="hidden absolute right-0 top-[35%] mr-12 lg:block">
        <NavControls />
      </div>
      <div className="flex flex-col items-center w-[90%] mx-auto md:w-[80%]">
        <div className="left h-2/3 w-full relative flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center mx-5">
            <PageTitle title="Projects" />
          </div>
        </div>
        <div className="right w-[80%] max-w-[90%] mx-auto grid text-center gap-20 gap-y-12 mb-10 mt-20 sm:grid-cols-2 lg:max-w-[80%] xl:mt-32 xl:grid-cols-3 xl:gap-20">
          <WorkCard
            img="/Tenzies.gif"
            link="https://github.com/ricardomreis22/Quizzical.git"
            title="Tenzies Game"
            lang={tenziesLang}
            info="The final project of the first react course where I did a Quiz app!"
          />
          <WorkCard
            img="/padel.gif"
            link="https://github.com/ricardomreis22/padeltournaments.git"
            title="Padel Tournament"
            lang={PadelLang}
            info="Final project of the course 'CS50: Introduction to Computer Science' creating a Padel Club!"
          />
          <WorkCard
            img="/padel.gif"
            link="https://github.com/ricardomreis22/Tenzies-Game.git"
            title="Tenzies Game"
            lang={tenziesLang}
            info="A project where I have done a game with the objetive of getting all numbers equal!"
          />
          <WorkCard
            img="/padel.gif"
            link="https://github.com/ricardomreis22/Quizzical.git"
            title="Quizzical"
            lang={tenziesLang}
            info="The final project of the first react course where I did a Quiz app!"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
