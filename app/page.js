import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Image from "next/image";
import NavControls from "./components/NavControls";

export default function Page() {
  return (
    <div className="text-[#191d2b] h-screen overflow-hidden">
      <Navbar hambColor="text-white" />
      <div className="hidden absolute right-0 top-[35%] mr-12 lg:block">
        <NavControls />
      </div>
      <div className="home flex items-center justify-center"></div>
      <div className="flex flex-col w-full h-screen justify-evenly items-center ml-16 lg:ml-0 lg:flex-row">
        <div className="flex w-1/4 mt-10 2xl:w-1/4 lg:ml-12">
          <Image
            src="/Foto.jpeg"
            alt="background Image"
            width={600}
            height={300}
            className="rounded-3xl z-10 border-solid border-4 border-[#191d2b]"
          />
        </div>
        <div className="flex flex-col font-bold justify-center items-center text-center text-lg  lg:h-screen lg:mr-10 lg:text-xl">
          <div className="w-2/4 mb-24 lg:mb-0 lg:mr-10">
            <h1 className="text-2xl mb-12 md:mt-12 lg:text-3xl xl:text-4xl">
              Hello, I'm Ricardo Reis!
            </h1>
            <p className="mt-4 lg:mb-12 lg:mt-12 lg:text-xl xl:text-xl mb-12">
              I'm a new Full Stack Web Developer! I love to learn, and I'm eager
              to start in my new job. Give me the chance to prove my value, and
              I will give you my best to become better every day!
            </p>
            <div className="flex justify-center min-w-fit lg:items-center lg:justify-center w-full">
              <Button
                className=" h-auto px-6 flex
                items-center
                py-1 cursor-pointer"
                buttonName="Download CV"
                href="/CV_Ricardo Reis.pdf"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
