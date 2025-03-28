// import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// const LocomotiveScrollSetup = ({ children }) => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const locoScroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//     });

//     return () => {
//       locoScroll.destroy();
//     };
//   }, []);

//   return <div ref={scrollRef} data-scroll-container>{children}</div>;
// };

// export default LocomotiveScrollSetup;
