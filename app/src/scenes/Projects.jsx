import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Fields from "./Fields";

const Projects = () => {
  return (
    <section id="projects" className="pt-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-center font-semibold text-6xl ">
          <span className="text-yellow">Our</span> Projects
        </p>
        <div className="flex justify-center mt-5 mb-10">
          <LineGradient width="w-2/3" />
        </div>

        <p className="mb-20 lg:text-2xl sm:text-1xl text-center">
          Made with Hard Work & Pure Love, Click the Category to see Magic
        </p>
      </motion.div>

      <Fields />
    </section>
  );
};

export default Projects;
