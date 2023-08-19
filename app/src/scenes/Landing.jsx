import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Glitched from "./Glitched";
import { Link } from "react-scroll";
import { Doped } from "./Media";
const doped = Doped[0]

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-4 md:mt-3 flex justify-center md:order-2">
        {isAboveLarge ? (
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[800px] md:max-w-[1000px]"
            src={doped.url}
          />
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={doped.url}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Glitched Title="DopedClub" />
          <p className="mt-10 mb-7 text-sm text-center md:text-start text">
            We are the marketing agency that knows no limits. Driven by our
            mission to be Creative, break the boundaries, and revolutionize your
            industry. Our vision is to be the marketing agency that leads the
            way. We are the rebels, the innovators, the trailblazers. BEYOND
            CREATIVITY Our mission is to build your brand, engage your audience,
            and grow your business. Our vision is to be the marketing agency
            that creates value. The marketing agency that captivates your
            customers.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Link
            className="text-xl mt-1 hover:text-yellow transition duration-500 inline-flex items-center cursor-pointer"
            onClick={() => setSelectedPage("contact")}
            to="contact"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
          >
            Contact Us
            <span className="ml-2" onClick={() => setSelectedPage("contact")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 hover:stroke-yellow cursor-pointer transition duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </Link>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
