import ContactForm from "@/components/contacts/ContactForm";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";

const Contact = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto h-screen">
      <div className="absolute top-0 left-0 pb-20 w-full">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
               absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
        <div className="relative my-5 z-10 md:mx-[40px] lg:mx-[60px] xl:mx-[200px] top-28">
          <div className="flex justify-start items-center gap-4 mb-6">
            <h2 className="text-2xl font-semibold p-0 m-0">Contact Me</h2>
            <div className="w-[200px] h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-12 lg:gap-2 xl:gap-12">
            <div className="">
              <ContactForm />
            </div>
            <div>
              <div className="flex justify-start items-center gap-3">
                <div>
                  <AiOutlineMail size={40} />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-5xl">Email</h3>
                  <h4 className="text-xl sm:text-3xl text-gray-400">
                    Lahiruyasas7@gmail.com
                  </h4>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 mt-8">
                <div>
                  <AiOutlinePhone size={40} />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-5xl">Phone Number</h3>
                  <h4 className="text-xl sm:text-3xl text-gray-400">
                    +94 710804846
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto bg-black-200 p-3 rounded-md flex justify-between items-center">
            <a
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              href="https://www.instagram.com/lahiruzx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={40} />
            </a>
            <a
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              href="https://github.com/lahiruyasas7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={40} />
            </a>
            <a
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              href="https://linkedin.com/in/lahiru-yasas-2ba260214"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={40} />
            </a>
            <a
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              href="https://x.com/lahiruyb_yasas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineX size={40} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
