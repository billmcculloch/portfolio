import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import s from "./Hero.module.scss";
import bill from "../assets/Bill.svg";

function Hero() {
  const cursorRef = useRef(null);
  const [sticky, setSticky] = useState<boolean>(false);
  const [cursorX, setCursorX] = useState<number>();
  const [cursorY, setCursorY] = useState<number>();
  const [cursor, setCursor] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (window.scrollY <= 1) {
        gsap.to(cursorRef.current, {
          opacity: 1,
          duration: 0,
        });
        setCursor(false);
      }
    };
    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0,
      });
      setCursor(true);
    };

    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("mousemove", (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
    window.addEventListener("scroll", () => handleScroll());

    return () => {
      window.removeEventListener("mousemove", (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
      });
      window.removeEventListener("scroll", () => handleScroll());
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleScroll = () => {
    var end = document.getElementById("end");
    var bg = document.getElementById("header");
    var marker = bg?.getBoundingClientRect().y;
    var gap = end?.getBoundingClientRect().y;
    var scrollTop = window.scrollY;

    console.log(marker);

    if (marker! <= 0) {
      bg!.style.backgroundSize = Math.max(8, gap! / 7) + "%";
    } else {
      bg!.style.backgroundSize = "72%";
    }

    if (gap! < 76) {
      setSticky(true);
    } else {
      setSticky(false);
    }

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
  };

  return (
    <>
      <div
        className={s.wrapper}
        style={{ cursor: cursor ? "inherit" : "none" }}
      >
        <div className={s.textWrapper}>
          <p>Hello, I'm</p>
        </div>
        <div
          className={s.header}
          id="header"
          // style={{
          //   background: `url(${bill}`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "72%",
          // }}
        />
      </div>
      <div id="end" />
      <div className={s.nav} style={{ opacity: sticky ? 1 : 0 }}>
        <div className={s.navImage} />
      </div>
      <div
        ref={cursorRef}
        className={s.cursor}
        style={{ top: cursorY + "px", left: cursorX + "px" }}
      />
    </>
  );
}

export default Hero;
