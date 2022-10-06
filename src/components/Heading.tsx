import { duration } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import s from "./Heading.module.scss";
import Navbar from "./Navbar";

function Heading() {
  const computerRef: any = useRef();
  const lightRef: any = useRef();
  const imageRef: any = useRef();

  // useEffect(() => {
  //   gsap.fromTo(
  //     [lightRef.current],
  //     { y: -200, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1.5 }
  //   );
  //   gsap.fromTo(
  //     [imageRef.current],
  //     { x: -200, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 2 }
  //   );
  //   setTimeout(() => {
  //     gsap.fromTo(
  //       [computerRef.current],
  //       { autoAlpha: 0 },
  //       { autoAlpha: 1, duration: 0.5 }
  //     );
  //   }, 2000);
  // });

  return (
    <>
      <div className={s.wrapper}>
        <Navbar />
        <div className={s.container}>
          <div className={s.title} ref={imageRef}>
            <h1>Bill McCulloch</h1>
            <h2>Marketer turned software developer based in Wellington, NZ</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
