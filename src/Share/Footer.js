import React from "react";
import UseData from "../Hooks/UseData";

const Footer = ({ bg, condition }) => {
  const { local } = UseData();
  return (
    <footer
      style={{
        background: `${
          (local === "light"
            ? "transparent"
            : condition
            ? "#212425"
            : "transparent",
          local === "dark"
            ? "transparent"
            : condition
            ? "#212425"
            : "transparent")
        }`,
      }}
      className="overflow-hidden rounded-lg mt-4"
    >
      <p className="text-center py-6 text-gray-lite  dark:text-color-910 dark:bg-transparent">
        © 2022 All Rights Reserved by Joshua Stroud.
      </p>
    </footer>
  );
};

export default Footer;
