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
          className="rounded-full w-[300px] h-[300px] 2xl:w-[330px] 2xl:h-[330px]"
          src={userImage}
          alt=""
        />
        <h2 className="mt-6 mb-1 text-7xl font-kanit font-semibold dark:text-white">
          Joshua Stroud
        </h2>
        <p className="mb-4 font-ubuntu text-2xl italic text-[#666666]  dark:text-[#acacac]">
          Software Developer
        </p>
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
            href="https://www.icloud.com/attachment/?u=https%3A%2F%2Fcvws.icloud-content.com%2FB%2FAdClC1uYLivwrG9Hf23hFsmWYcU4Afj7hGPApZ2t9Nqi6Y-i3Mda9m-g%2F%24%7Bf%7D%3Fo%3DAijBYteXn7zmcTeenWQtubvRTMaguP7I6bQVCy1R2lmU%26v%3D1%26x%3D3%26a%3DCAogEiY2Dhqoz0VeP3dDr66DPE6wc9l8xuFyrdEBULWv-rcSbRDGzvK4wzAYxt7tjM0wIgEAUgSWYcU4WgRa9m-gaiYwu14cASgZJJU5OOiq3lHgYxEAilWJA9C4TuC72fiUqVEmBgwFlXImVdzXizH6DsPEWmdQEaI1osCBRwaQXx53cvOatNnUcVPQIUkAORc%26e%3D1669963935%26fl%3D%26r%3D90D8BE16-9C38-4477-AAF9-D26DC377A8EA-1%26k%3D%24%7Buk%7D%26ckc%3Dcom.apple.clouddocs%26ckz%3Dcom.apple.CloudDocs%26p%3D125%26s%3DzYCmjsft_0YYjlevWbbEZz8k-e8&uk=uhyYD1jMqcYQHrZTo4IYvg&f=Josh%2520Stroud%2520CV%25202022%2520copy.pdf&sz=78104"
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
