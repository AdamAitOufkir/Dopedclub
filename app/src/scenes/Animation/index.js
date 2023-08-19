import gsap from "gsap";
export const Animated = [
  { type: "video", url: require("./Dopedx.mp4"), category: "logo" },
];

const tl = gsap.timeline();

export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 3,
    ease: "power3.inOut",
  })

    .to("body", {
      duration: 3,
      ease: "power3.inOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: mobileLanding,
      },
      "-=2"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};


export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};
