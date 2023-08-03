import { motion } from "framer-motion";
import TrustSlider from "./TrustSlider";
import LineGradient from "../components/LineGradient";

const MySkills = () => {
  return (
    <section id="skills" className="pt-10 ">
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
        <p className="text-center text-7xl">
          They trust <span className="text-yellow">US</span>
        </p>
        <div className="flex justify-center mt-5 mb-28">
          <LineGradient width="w-2/3" />
        </div>

        <p className="mt-10 mb-7 text-center  ">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
        </p>
      </motion.div>

        <TrustSlider />
    </section>
  );
};

export default MySkills;
