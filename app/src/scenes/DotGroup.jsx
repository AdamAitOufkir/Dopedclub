import { Link } from "react-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <Link
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } cursor-pointer w-3 h-3 rounded-full transition duration-500`}
        onClick={() => setSelectedPage("projects")}
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      ></Link>

      <Link
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        } cursor-pointer w-3 h-3 rounded-full transition duration-500`}
        onClick={() => setSelectedPage("projects")}
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      ></Link>
      <Link
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } cursor-pointer w-3 h-3 rounded-full transition duration-500`}
        onClick={() => setSelectedPage("projects")}
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      ></Link>
    </div>
  );
};

export default DotGroup;
