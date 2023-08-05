import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import ProdCard from "./ProdCard";
import MarketingCard from "./MarketingCard";
import DevCard from "./DevCard";
import ContentCard from "./ContentCard";
import LearningCard from "./LearningCard";
const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="services" className="pt-10 pb-16">
      <motion.div
        className="text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-poppins font-semibold text-6xl mb-5 text-center">
          <span className="text-yellow">Our</span> Services
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 mb-10 text-center lg:text-2xl sm:text-1x">
          You Can Check our expertise categories or Contact Us for more infos
        </p>
      </motion.div>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProdCard />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MarketingCard />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DevCard />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContentCard />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LearningCard />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
