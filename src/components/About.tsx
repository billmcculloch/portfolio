import { useEffect, useRef, useState } from "react";
import s from "./About.module.scss";

function About() {
  const [visible, setVisible] = useState();
  useEffect(() => {
    const cont = document.getElementById("about");
    const nav = document.getElementById("burger");
    window.addEventListener("scroll", () => {
      if (isVisible(nav, cont)) {
        console.log("visible in div");
      } else {
        console.log("not visible in div");
      }
    });
  }, []);

  const isVisible = function (
    element: HTMLElement | null,
    container: HTMLElement | null
  ) {
    if (!element || !container) {
      return;
    }
    const { bottom, height, top } = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return top <= containerRect.top
      ? containerRect.top - top <= height
      : bottom - containerRect.bottom <= height;
  };
  return (
    <div className={s.wrapper} id={"about"}>
      <></>
    </div>
  );
}

export default About;
