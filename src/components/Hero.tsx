import { duration } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import s from "./Hero.module.scss";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";

function Hero() {
  const logoRef = useRef(null);
  const pRef = useRef(null);

  const [height, setHeight] = useState(650);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    window.removeEventListener("scroll", () => handleScroll());
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY,
      minHeight = 60,
      logoHeight = Math.max(minHeight, 650 - scrollTop);
    setHeight(logoHeight);
    console.log(scrollTop);
    if (scrollY >= 696.5) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // const _showName = () => {
  //   gsap.fromTo(
  //     logoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //     }
  //   );
  // };

  return (
    <>
      <div className={s.wrapper}>
        <p>
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, I'm")
                .start()
                .callFunction(() => {
                  _showName();
                });
            }}
          /> */}
          Hello, I'm
        </p>
        <div className={sticky ? s.sticky : ""}>
          <img
            src=" src/assets/Bill.svg"
            className={s.bill}
            ref={logoRef}
            id="bill"
            style={{ height: height }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
