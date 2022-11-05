import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import aboutImage from "../../assets/images/about/about.jpg";
import "../../Share/Style.css";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
//import LineItem from "./LineItem";
import AboutCard from "./AboutCard";
import PageTitle from "../../Share/PageTitle";

const About = () => {
  const { local, experienceArray } = UseData();
  //const { lineArray, } = UseData();
  return (
    <>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
                About Me
              </h2>
              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-12 md:col-span-4">
                  {/* personal images for about page  */}
                  <img
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src={aboutImage}
                    alt=""
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-2.5">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                      Who am I?
                    </h3>
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      My current career goal is to work full-time in the IT and
                      telecommunications industry and to build on the experience
                      I gained at university. My overall career goal is to
                      eventually move into a project leadership role. I was
                      fortunate enough to have a leadership role within many of
                      my papers at University and loved bringing the team
                      together and the work we created.
                    </p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      I am a self-motivated, hardworking and enthusiastic
                    </p>
                  </div>

                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                      Personal Info
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
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
                        <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
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
                        <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
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
                        <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
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
                  {/* End personal information */}
                </div>
              </div>
            </div>

            <div className="  pb-12 ">
              <h3 className="text-[35px] dark:text-white font-medium pb-5">
                What I do!
              </h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                {/* Experience information  */}

                {experienceArray.map((item, i) => (
                  <AboutCard key={i} item={item} local={local} />
                ))}
              </div>
            </div>

            <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
              <div className="col-span-1 ">
                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  Language and Skill comprehension
                </h4>

                {/* Knowledges items */}

                <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-6 flex-wrap">
                  <button className="resume-btn">JavaScript</button>
                  <button className="resume-btn">TypeScript</button>
                  <button className="resume-btn">C#</button>
                  <button className="resume-btn">HTML</button>
                  <button className="resume-btn">CSS</button>
                  <button className="resume-btn">SQL</button>
                  <button className="resume-btn">Agile</button>
                  <button className="resume-btn">React</button>
                </div>
              </div>
            </div>

            {/* Common Footer call here */}
            <Footer condition={false} bg={"#FFFF"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
