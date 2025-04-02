import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { blogLink, navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled
          ? "bg-gradient-to-r from-black to-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Carlos &nbsp;Espinosa
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#0CAFFF]" : "text-white"
              } hover:text-[#0CAFFF] text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                if (link.id !== "resume" && link.id !== "blog") {
                  setActive(link.title);
                } else {
                  setActive("");
                }
              }}
            >
              {link.id === "resume" ? (
                <a
                  href="/resume/CarlosEspinosaResume.pdf"
                  download="CarlosEspinosaResume.pdf"
                >
                  {link.title}
                </a>
              ) : link.id === "blog" ? (
                <a href={blogLink} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              ) : (
                /*The # symbol is used in HTML to reference an element by its id. */
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((toggle) => !toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle((toggle) => !toggle);
                    if (link.id !== "resume" && link.id !== "blog") {
                      setActive(link.title);
                    } else {
                      setActive("");
                    }
                  }}
                >
                  {link.id === "resume" ? (
                    <a
                      href="/resume/Bharath_Resume.pdf"
                      download="Bharath_Resume.pdf"
                    >
                      {link.title}
                    </a>
                  ) : link.id === "blog" ? (
                    <a
                      href={blogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  ) : (
                    /*The # symbol is used in HTML to reference an element by its id. */
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
