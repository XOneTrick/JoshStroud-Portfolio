import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import About from "./Pages/About/About";

import Contact from "./Pages/Contact/Contact";

import Home from "./Pages/Home/Home";
import HomePage from "./Pages/Home/HomePage";

import Portfilo from "./Pages/Portfilo/Portfilo";

import NotFound from "./Share/NotFound";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />}>
              <Route index element={<HomePage />} />
              <Route path="homePage" element={<HomePage />} />
              >
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="works" element={<Portfilo />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
