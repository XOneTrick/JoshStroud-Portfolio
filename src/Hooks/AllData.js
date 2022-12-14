import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.jpg";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.jpg";

// works small images
import workSmall1 from "../assets/images/work_images/small/1.jpg";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";

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
      tag: "Phone App",
      title: "Loo-Cate",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "AUT",
      langages: "Typescript, React Native",
      linkText: "Unavailable",
      description:
        "Loo-Cate was a group project create as part of an assignment for a software developement paper at Auckland University of Technology. The aim of this project was to provide the user the best public toilets on their area as well as allow them to rate and comment on public toilets for others to see.",
    },

    {
      id: "2",
      tag: "Website",
      title: "Nagche Art School",
      img: work2,
      imgSmall: workSmall2,
      bg: "#E9FAFF",
      client: "Nagche Art and Crafts School",
      langages: "Typescript, React",
      link: "https://mapuche-art.web.app/home",
      linkText: "www.mapuche-art.com",
      description:
        "This Website was comissioned by the Nagche school of Art and Crafts. It is a website that allows the school to show its products and services to the public as well as act as a marketplace for selling products from the students. It also provides the school with a tool and platform for better publicity. It was developed with React and Typescript.",
    },

    {
      id: "3",
      tag: "Website",
      title: "Portfolio Website",
      img: work3,
      imgSmall: workSmall3,
      bg: "#F4F4FF",
      client: "Myself",
      langages: "JavaScript, React",
      link: "https://joshstroud.netlify.app/home/homePage",
      linkText: "www.joshstroudportfolio.com",
      description:
        "This portfolio website was created using React and Javascript. The purpose of this website is to provide and online presence of myself displaying my development abilities. I intend to kep it updated with future developments.",
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
      des: "I have created one mobile application whilst at university, this app was called 'Loo-Cate' and helped users find the best public toilets near them!.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "2",
      icon: icon4,
      title: "Managment",
      des: "During my time at university, I managed and lead multiple teams during multiple group projects.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "3",
      icon: icon5,
      title: "Web Development",
      des: "I was part of the development team for creating the Mapuche School of Art and Crafts website, this was a great experience and I developed my web development skills.",
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
