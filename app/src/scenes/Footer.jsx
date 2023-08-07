import { Link } from "react-scroll";
import Map from "./Map";
import PlaceIcon from "@mui/icons-material/Place";

const Footer = ({ setSelectedPage }) => {
  return (
    <footer className="bg-[#0d031a] pt-5 flex flex-col sm:flex-row pb-5">
      <div className="sm:w-3/12 mx-auto sm:ml-20 flex flex-col sm:items-start items-left justify-left">
        <div className=" mb-5">
          <p className="font-poppins justify-center align-center text-center font-semibold text-xl my-2 text-yellow">
            CONTACT US
          </p>
        </div>
        <div className="flex mb-5">
          <a
            className="flex items-center"
            href="https://www.facebook.com/dopedclubagency"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              viewBox="0 0 512 512"
              fill="#FFFFFF"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
            <p className="font-poppins font-semibold text-sm my-2">
              /Dopedclubagency
            </p>
          </a>
        </div>
        <div className="flex mb-5">
          <a
            className="flex items-center"
            href="https://www.instagram.com/Dopedclub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="#FFFFFF"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <p className="font-poppins font-semibold text-sm my-2 ">
              @Dopedclub
            </p>
          </a>
        </div>
        <div className="flex items-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <p className="font-poppins font-semibold text-sm my-2 ">
            05 20 64 21 65
          </p>
        </div>
        <div className="flex items-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            fill="#ffffff"
            className="w-6 h-6 mr-2"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <p className="font-poppins font-semibold text-sm my-2 ">
            06 63 18 50 28
          </p>
        </div>
      </div>
      <div className="sm:w-3/12 mx-auto sm:ml-20 flex flex-col sm:items-start items-center justify-center">
        <div className="flex flex-col">
          <div className="flex mb-5 justify-center align-center">
            <p className="font-poppins font-semibold text-xl my-2 text-yellow">
              MENU
            </p>
          </div>
          <Link
            className="flex items-center text-sm mb-5 hover:text-yellow transition duration-500 cursor-pointer"
            onClick={() => setSelectedPage("home")}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.5em"
              fill="#FBBF24"
              viewBox="0 0 512 512"
              className="mr-3"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            Home
          </Link>

          <Link
            className="flex items-center text-sm mb-5 hover:text-yellow transition duration-500 cursor-pointer"
            onClick={() => setSelectedPage("projects")}
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.5em"
              fill="#FBBF24"
              viewBox="0 0 512 512"
              className="mr-3"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            Projects
          </Link>
          <Link
            className="flex items-center text-sm mb-5 hover:text-yellow transition duration-500 cursor-pointer"
            onClick={() => setSelectedPage("services")}
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.5em"
              fill="#FBBF24"
              viewBox="0 0 512 512"
              className="mr-3"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            Services
          </Link>
          <Link
            className="flex items-center text-sm mb-20 hover:text-yellow transition duration-500 cursor-pointer"
            onClick={() => setSelectedPage("contact")}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.5em"
              fill="#FBBF24"
              viewBox="0 0 512 512"
              className="mr-3"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            Contact
          </Link>
        </div>
      </div>
      <div className=" sm:w-6/12 mb-5">
        <p className="font-poppins font-semibold text-x my-2 text-center">
          <PlaceIcon />
          Address : APPAT 2, ETG 2, RUE LOUIS FERRY, casablanca
        </p>
        <Map />
      </div>
    </footer>
  );
};

export default Footer;
