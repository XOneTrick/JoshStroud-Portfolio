import { React, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
import CommonContact from "./CommonContact";
import backgroundLight from "../../Share/particlesbackgroundLight";

const Contact = () => {
  const { local, contactArray } = UseData();

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
      <PageTitle title="Contact"></PageTitle>
      {/* End pagetitle */}
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={backgroundLight}
        />
        <section className="bg-transparent lg:rounded-2xl dark:bg-transparent">
          <div className="container px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="py-12">
              <h2 className="after-effect after:left-40 mb-[40px]">Contact</h2>
              <div className="lg:flex gap-x-20">
                <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6">
                  {/* Contact Infomation */}

                  {contactArray.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: `${
                          local === "dark" ? "#212425" : item?.bg
                        }`,
                      }}
                      className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
                    >
                      <span className="w-8 mt-2">
                        <img
                          src={item.icon}
                          alt="icon"
                          className="text-4xl dark:text-white"
                        />
                      </span>
                      <div className="space-y-2">
                        <p className="text-xl font-semibold dark:text-white">
                          {item?.title} :
                        </p>
                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
                          {item?.item1}
                        </p>
                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
                          {item?.item2}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                  <CommonContact condition={false} />
                </div>
              </div>
            </div>
          </div>
          {/* End contact */}

          {/* Common Footer call here */}
          <Footer condition={false} />
        </section>
      </div>
    </>
  );
};

export default Contact;
