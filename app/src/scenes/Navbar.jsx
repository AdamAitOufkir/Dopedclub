import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-scroll";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav
      className={`${
        isTopOfPage ? "" : "bg-[#0d031a]"
      } z-40 w-full fixed top-0 py-6`}
      style={{ zIndex: "100" }}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img
          src="https://i.ibb.co/WyzKqbP/LOGO.png"
          alt="Logo"
          className="h-24 w-24"
          style={{ margin: "-30px 0" }}
        />

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-center items-center gap-16 font-poppins text-base font-semibold flex-grow text-white">
            <Link
              className={`${
                selectedPage === "home" ? "text-yellow" : ""
              } cursor-pointer hover:text-yellow transition duration-500`}
              onClick={() => setSelectedPage("projects")}
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>

            <Link
              className={`${
                selectedPage === "projects" ? "text-yellow" : ""
              } cursor-pointer hover:text-yellow transition duration-500`}
              onClick={() => setSelectedPage("projects")}
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>

            <Link
              className={`${
                selectedPage === "contact" ? "text-yellow" : ""
              } cursor-pointer hover:text-yellow transition duration-500`}
              onClick={() => setSelectedPage("projects")}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </div>
        ) : (
          <button
            className="rounded-full bg-yellow p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-[#0d031a] w-[300px] transition duration-500">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
            <Link
              className={`${
                selectedPage === "home" ? "text-yellow" : ""
              } cursor-pointer hover:text-yellow transition duration-500`}
              onClick={() => setSelectedPage("projects")}
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>

            <Link
              className={`${
                selectedPage === "projects" ? "text-yellow" : ""
              } cursor-pointer hover:text-yellow transition duration-500`}
              onClick={() => setSelectedPage("projects")}
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>

            <Link
              className={`${
                selectedPage === "contact" ? "text-yellow" : ""
              } cursor-pointer hover:text-yellow transition duration-500`}
              onClick={() => setSelectedPage("projects")}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
