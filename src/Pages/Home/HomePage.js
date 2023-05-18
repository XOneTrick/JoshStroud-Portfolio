import { React, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import userImage from "../../assets/images/about/avatar.jpg";
import downloadIcon from "../../assets/images/download.png";
import { FaLinkedinIn } from "react-icons/fa";
import PageTitle from "../../Share/PageTitle";
import backgroundLight from "../../Share/particlesbackgroundLight";

const HomePage = () => {
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
      <PageTitle title="Home"></PageTitle>

      <div
        className="position : absolute; width:100%;
  height:100%; z-index:-1;"
      >
        <Particles
          id="position : absolute; width:100%;
          height:100%; z-index:-1;"
          init={particlesInit}
          loaded={particlesLoaded}
          options={backgroundLight}
        />

        <div className="flex relative flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center">
          <img
            className="rounded-full mt-12 mb-4 w-[290px] h-[310px] 2xl:w-[330px] 2xl:h-[330px]"
            src={userImage}
            alt=""
          />

          <h2 className="mt-4 mb-4 text-4xl sm:text-7xl font-eczar dark:text-white">
            Joshua Stroud
          </h2>
          <p className="mt-2 mb-2 font-ubuntu text-2xl italic text-[#666666]  dark:text-[#acacac]">
            Software Developer
          </p>
          {/* Avatar Info End */}

          {/* Social information start */}
          <div className="flex mt-2 mb-2 space-x-3">
            <a
              href="https://www.linkedin.com/in/joshua-stroud-04885b138/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
          {/* Social information start */}

          {/* Dowanload button start */}
          <button className="flex mt-2 mb-2 h-10 items-center bg-[#F3F6F6] dark:bg-[#FFFFFF] duration-200 transition ease-linear hover:bg-slate-400 dark:hover:bg-slate-400 px-8 py-3 text-md text-black outline-black rounded-[35px]">
            <img src={downloadIcon} alt="icon" className="mr-2 h-4 w-4" />
            <a
              href="https://www.icloud.com/attachment/?u=https%3A%2F%2Fcvws.icloud-content.com%2FB%2FAfMhom4zyg0tWbjCC7k97W-rjszuAUgZYpdrOtjKl8dKY29qSivyA85a%2F%24%7Bf%7D%3Fo%3DAtT0Xi-5_ue_kKzsJeCycdmq4rx3t9DbIzGff4yp-59y%26v%3D1%26x%3D3%26a%3DCAogfe1R1HCMWEyaZL-M1e60rZeVwm5eVXtWjx1ZH7IMW4QSbRCCsdiu4DAYgsHTguowIgEAUgSrjszuWgTyA85aaiZ9seutBV_8VynQWUXjYp9aZ3QZkBlaPYwtFdDdu5D59wjKjcihMXImp3bmwa47T8Eu2cEjMjmqkc0-PArowibz3JtpLIwzQ3AHOdptV6Y%26e%3D1677727162%26fl%3D%26r%3DA86D6935-7D9D-4E9F-825E-5588178646C5-1%26k%3D%24%7Buk%7D%26ckc%3Dcom.apple.clouddocs%26ckz%3Dcom.apple.CloudDocs%26p%3D125%26s%3DJpt2_vLoaVolDXJqpgJsSOSJXRE&uk=cu6AJsrPKlcWtmlF0yAAEg&f=Josh%2520Stroud%2520CV%25202023.pdf&sz=74488"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
