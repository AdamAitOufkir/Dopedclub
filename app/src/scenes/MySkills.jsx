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
        <p className="font-semibold text-6xl text-center">
          They trust <span className="text-yellow">US</span>
        </p>
        <div className="flex justify-center mt-5 mb-10">
          <LineGradient width="w-2/3" />
        </div>

        <p className="lg:text-2xl sm:text-1xl text-center  ">
          We collaborated to make it happen, CLICK on the LOGO to see Magic
        </p>
      </motion.div>

      <TrustSlider />
    </section>
  );
};

export default MySkills;
