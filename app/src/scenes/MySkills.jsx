import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LineGradient from "../components/LineGradient";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
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
    <section id="skills" className="pt-10 ">
      {/* HEADER AND IMAGE SECTION */}
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

      {/* SKILLS */}
      <motion.div
        style={{
          background:
            "linear-gradient(180deg,rgba(128, 128, 128, 0), rgba(255, 255, 255, 1), rgba(128, 128, 128, 0))",
        }}
      >
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/hZW3S8m/Polydev.png"
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/kDvKBNC/Mo9awil.png"
              alt=""
              style={{
                Width: "100%",
                Height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/5BXZszW/Logo-El-kettani-habitat.png"
              alt=""
              style={{
                maxWidth: "50%",
                maxHeight: "50%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/nRcztcK/Ma2.png"
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/grRTN2c/LOGO-2.png"
              alt=""
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/3TJtcCV/1200px-M-venpick-Logo-svg.png"
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/pRDzwBH/opera.png"
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/LCQcZms/Anatolia.png"
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/S6MKvd9/DEROUA-POOL-LOGO-PNG.png"
              alt=""
              style={{
                maxWidth: "50%",
                maxHeight: "50%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/rpdK98K/HERITIMA-LOGO-3.png"
              alt=""
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://i.ibb.co/4Tx3N7N/logo-TCG-orange-bland.png"
              alt=""
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                objectFit: "contain",
              }}
            />
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default MySkills;
