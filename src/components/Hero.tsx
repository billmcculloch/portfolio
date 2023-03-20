import { duration } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import s from "./Hero.module.scss";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";

function Hero() {
  const logoRef = useRef(null);
  const cursorRef = useRef(null);

  const [height, setHeight] = useState<number>(500);
  const [sticky, setSticky] = useState<boolean>(false);
  const [cursorX, setCursorX] = useState<number>();
  const [cursorY, setCursorY] = useState<number>();
  const [cursor, setCursor] = useState<boolean>(false);

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  window.addEventListener("scroll", () => handleScroll());
  window.removeEventListener("scroll", () => handleScroll());

  const handleScroll = () => {
    let scrollTop = window.scrollY,
      minHeight = 60,
      logoHeight = Math.max(minHeight, 500 - scrollTop);
    setHeight(logoHeight);

    if (scrollTop <= 1) {
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0,
      });
      setCursor(false);
    } else {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0,
      });
      setCursor(true);
    }

    console.log(scrollTop);

    if (scrollTop > 506) {
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
      <div
        className={s.wrapper}
        style={{ cursor: cursor ? "inherit" : "none" }}
      >
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
        <div id="billcontainer" className={sticky ? s.sticky : ""}>
          <img
            src=" src/assets/Bill.svg"
            className={s.bill}
            ref={logoRef}
            id="bill"
            style={{ height: height, objectFit: "contain" }}
          />
        </div>
        <div
          ref={cursorRef}
          className={s.cursor}
          style={{ top: cursorY + "px", left: cursorX + "px" }}
        />
      </div>
    </>
  );
}

export default Hero;
