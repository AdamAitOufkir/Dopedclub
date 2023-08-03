import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

const TrustSlider = () => {
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

        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1000}
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
    )
}

export default TrustSlider