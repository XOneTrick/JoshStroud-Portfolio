import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.jpg";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.jpg";
import work4 from "../assets/images/work_images/4.jpg";
import work5 from "../assets/images/work_images/5.jpg";

// works small images
import workSmall1 from "../assets/images/work_images/small/1.jpg";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";
import workSmall4 from "../assets/images/work_images/small/4.jpg";
import workSmall5 from "../assets/images/work_images/small/5.jpg";

import icon1 from "../assets/images/icons/icon-2.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // filter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    

    {
      id: "1",
      tag: "Websites",
      title: "Nagche Art School",
      img: work2,
      imgSmall: workSmall2,
      bg: "#E9FAFF",
      client: "Nagche Art and Crafts School",
      langages: "Typescript, React",
      link: "https://mapuche-art.web.app/home",
      linkText: "www.mapuche-art.com",
      description:
        "The Nagche School of Art and Crafts commissioned this website to showcase its products and services to the public and serve as a marketplace for student-produced goods. Additionally, the platform provides the school with an effective tool for publicity purposes. Developed using React and Typescript, this website serves as a powerful resource for promoting the school and its offerings while also facilitating sales transactions.",
    },
    {
      id: "2",
      tag: "Websites",
      title: "AI (WIP)",
      img: workSmall5,
      imgSmall: work5,
      bg: "#F4F4FF",
      client: "Myself and Friends",
      langages: "TypeScript, React",
      link: "https://ai-companion-wheat.vercel.app/",
      linkText: "www.stroudbot.com",
      description:
        "CURRENT WORK IN PROGRESS -- FEATURES COMPLETED : CHAT AND CODE GENERATION. FEATURES TO BE COMPLETED : IMAGE, VIDEO AND MUSIC GENERATION.",
    },

    {
      id: "3",
      tag: "Websites",
      title: "Portfolio Website",
      img: work3,
      imgSmall: workSmall3,
      bg: "#F4F4FF",
      client: "Myself",
      langages: "JavaScript, React",
      link: "https://joshstroud.netlify.app/home/homePage",
      linkText: "www.joshstroudportfolio.com",
      description:
        "Created with React and Javascript, this portfolio website is designed to establish an online presence for myself and showcase my development abilities. The website serves as a comprehensive platform for displaying my skills, experience, and accomplishments in a visually appealing manner. Furthermore, I aim to keep it updated with future developments to ensure that it accurately reflects my current expertise and capabilities.",
    },
    {
      id: "4",
      tag: "Websites",
      title: "Spotify Clone",
      img: work4,
      imgSmall: workSmall4,
      bg: "#F4F4FF",
      client: "Myself and Friends",
      langages: "TypeScript, React",
      link: "https://spotify-clone-six-beige.vercel.app/",
      linkText: "www.spotify-clone.com",
      description:
        "Created with React, TypeScript, Supabase and intergrating a Stripe payment system, I created this Spotify clone in order to host my friends music mixes. This website presents the basic functionality of Spotify and its styling.",
    },
    {
      id: "5",
      tag: "Phone App",
      title: "Loo-Cate",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "AUT",
      langages: "Typescript, React Native",
      linkText: "Unavailable",
      description:
        "The Loo-Cate application was developed as a collaborative project to fulfill an assignment for a software development course at Auckland University of Technology. Its primary aim was to enable users to locate the highest-quality public restrooms in their vicinity while also providing them with the opportunity to contribute to a public database of ratings and reviews.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },

    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/homeTwo/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Works",
      link: "/homeTwo/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "03",
      name: "Blogs",
      link: "/homeTwo/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "04",
      name: "Contact",
      link: "/homeTwo/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // experience items for about page
  const experienceArray = [
    {
      id: "1",
      icon: icon1,
      title: "App Development",
      des: "During my time at university, I created a mobile application called 'Loo-Cate' using React Native. This app made it easy for users to locate the best public toilets near them.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "2",
      icon: icon4,
      title: "Managment",
      des: "Throughout my university studies, I had the opportunity to manage and lead several teams across various group projects. These experiences enabled me to develop strong leadership skills and the ability to guide teams towards successful project outcomes.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "3",
      icon: icon5,
      title: "Web Development",
      des: "I was part of the development team that created the website for the Mapuche School of Art and Crafts during my time at university, using TypeScript and React. This experience allowed me to not only improve my web development skills but also gain practical experience in working collaboratively on a real-world project.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Typescript",
      number: "80",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Javascript",
      number: "75",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "SQL",
      number: "60",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "HTML",
      number: "60",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "joshua.stroud@me.com",

      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Sandringham",
      item2: "Auckland, New Zealand",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    menuItem,
    NavLink,
    menuItemTwo,
    experienceArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
