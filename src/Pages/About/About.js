import { React, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaLinkedinIn,
  FaArrowRight,
  FaReact,
} from "react-icons/fa";
import backgroundLight from "../../Share/particlesbackgroundLight";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import aboutImage from "../../assets/images/about/about.jpg";
import "../../Share/Style.css";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
//import LineItem from "./LineItem";
import AboutCard from "./AboutCard";
import PageTitle from "../../Share/PageTitle";
//import { Parallax } from "react-scroll-parallax";

const About = () => {
  const { local, experienceArray } = UseData();
  //const { lineArray, } = UseData();

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}
      <div
        className="position : absolute; width:100%;
  height:100%; z-index:-1;"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={backgroundLight}
        />
        <section>
          <div className="relative container lg:rounded-2xl bg-transparent dark:bg-transparent  px-4 sm:px-5 md:px-10 lg:px-20">
            
          

              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-8 md:col-span-4">
                  {/* personal images for about page  */}
                  <img
                    className="w-full h-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] md:mb-0 shadow-2xl"
                    src={aboutImage}
                    alt=""
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-2.5">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-8xl md:text-4xl font-medium font-poppins dark:text-white mb-3 ">
                      Who am I?
                    </h3>
                    <p className="text-gray-lite text-lg dark:text-color-910 leading-7">
                      Hi there! My name is Josh, and I am a driven and motivated
                      professional with a passion for IT and telecommunications.
                      My current career goal is to secure a full-time position
                      in this industry, where I can leverage the skills and
                      experience I gained during my time at Auckland University of Technology.
                      Throughout my academic career, I was fortunate enough to
                      take on leadership roles in several group projects. These
                      experiences ignited my love for bringing a team together
                      to achieve a common goal, and I found myself thriving in
                      these environments. As I look towards the future, my
                      ultimate career goal is to transition into a project
                      leadership role. I am excited about the prospect of
                      managing and guiding teams towards successful project
                      outcomes. I am always eager to learn and stay up-to-date
                      with the latest industry trends and technologies. With a
                      strong foundation in IT and telecommunications, I am
                      confident in my ability to make a valuable contribution to
                      any team.
                    </p>
                  </div>

                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                      Personal Info
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="text-oriange bg-transparent dark:bg-transparent shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaLinkedinIn />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            LinkedIn
                          </p>
                          <a
                            href="https://www.linkedin.com/in/joshua-stroud-04885b138/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h6 className="font-medium dark:text-white">
                              <FaArrowRight />
                            </h6>
                          </a>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-oriange-lite bg-transparent dark:bg-transparent shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMapMarkerAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Location
                          </p>
                          <h6 className="font-medium dark:text-white">
                            Auckland, New Zealand
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-green bg-transparent dark:bg-transparent shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaEnvelopeOpenText />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Email
                          </p>
                          <h6 className="font-medium dark:text-white">
                            joshua.stroud@me.com
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-color-50 bg-transparent dark:bg-transparent shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaRegCalendarAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Birthday
                          </p>
                          <h6 className="font-medium dark:text-white">
                            November 13, 1999
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>

            <div className="  pb-12 ">
              <h3 className="text-[35px] dark:text-white font-medium pb-5 after-effect after:left-52 mt-12 lg:mt-0 ">
                What I do!
              </h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                {/* Experience information  */}

                {experienceArray.map((item, i) => (
                  <AboutCard key={i} item={item} local={local} />
                ))}
              </div>
            </div>

            <div className="container bg-transparent dark:bg-transparent py-12 px-4 sm:px-5 md:px-10 lg:px-20 rounded-lg">
              <div className="col-span-1 ">
                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  Language and Skill Comprehension
                </h4>

                {/* Knowledges items */}

                <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-6 flex-wrap">
                  <button className="javascript-btn">JavaScript</button>
                  <button className="typescript-btn">TypeScript</button>
                  <button className="c-btn">C#</button>
                  <button className="html-btn">HTML</button>
                  <button className="css-btn">CSS</button>
                  <button className="sql-btn">SQL</button>
                  <button className="react-btn flex items-center">
  React Framework
  <FaReact className="ml-3" />
                  </button>
                </div>
                <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-6 flex-wrap mt-6">
                  <button className="resume-btn">Agile</button>
                  <button className="resume-btn">CI/CD</button>
                  <button className="resume-btn">Version Control</button>
                </div>
              </div>
            </div>

            <Footer condition={false} />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
