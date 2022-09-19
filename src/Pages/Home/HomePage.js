import React from "react";
import userImage from "../../assets/images/about/avatar.jpg";
import downloadIcon from "../../assets/images/download.png";
import { FaLinkedinIn } from "react-icons/fa";
import PageTitle from "../../Share/PageTitle";

const HomePage = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      {/* End pagetitle */}

      <div
        className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
        data-aos="fade"
      >
        <img
          className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
          src={userImage}
          alt=""
        />
        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          Joshua Stroud
        </h3>
        <p className="mb-4 text-[#7B7B7B]">Software Developer</p>
        {/* Avatar Info End */}

        {/* Social information start */}
        <div className="flex space-x-3">
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
        <button className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
          <img src={downloadIcon} alt="icon" className="mr-2" />
          <a
            href="https://www.icloud.com/attachment/?u=https%3A%2F%2Fcvws.icloud-content.com%2FB%2FARwba64tCsGzhNG_s57PVrKVXAnyAeX56pcC7Pk1tQ3bD_k7Skz4K5lF%2F%24%7Bf%7D%3Fo%3DAgXv8aW0kFEKo-Tk0IIZOgtjIFUuMEuJpI9zicTW857E%26v%3D1%26x%3D3%26a%3DCAogP0_p7xWwwpnmJ51NtBNh4BwFT2Y3zcQsho-1WxjYhqgSbRCt-6-jtTAYrYur974wIgEAUgSVXAnyWgT4K5lFaiZoST0LlXWiTNuA3v2RGugnOoXO7XNiP0Gb3r16ArbPtEs3JvbKA3Im7GHMIZZLA-EiEuOi-H-0fXPCulgy3BIJOiU7cbZqddn7AggLUFc%26e%3D1666160706%26fl%3D%26r%3D21D14E62-1D14-44D1-B477-9A67D13E3D5D-1%26k%3D%24%7Buk%7D%26ckc%3Dcom.apple.clouddocs%26ckz%3Dcom.apple.CloudDocs%26p%3D125%26s%3D3LSw1EQ2MzUf281OMekHHluASHI&uk=3lclRyCwDzdgYEJKgTHrfw&f=Josh-Stroud-CV.pdf&sz=30378"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </button>

        {/* Dowanload button End */}
      </div>
    </>
  );
};

export default HomePage;
