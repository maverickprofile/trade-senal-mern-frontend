// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";

// gsap.registerPlugin(ScrollTrigger);

// const useGSAPAnimations = () => {
//   useEffect(() => {
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("[data-scroll-container]"),
//       smooth: true,
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//       },
//       pinType: document.querySelector("[data-scroll-container]").style.transform
//         ? "transform"
//         : "fixed",
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();

//     gsap.from(".fade-in", {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: ".fade-in",
//         start: "top 80%",
//         end: "bottom 50%",
//         scrub: true,
//         scroller: "[data-scroll-container]",
//       },
//     });

//     return () => {
//       locoScroll.destroy();
//     };
//   }, []);
// };

// export default useGSAPAnimations;
