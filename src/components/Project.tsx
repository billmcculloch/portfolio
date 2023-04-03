import { useEffect, useLayoutEffect, useRef } from "react";
import s from "./Project.module.scss";

interface ProjectProps {
  description: string;
  tech: Array<string>;
  images?: Array<string>;
  projectName: string;
  projectUrl: string;
  colour: string;
}

export default function Project(props: ProjectProps) {
  const techList = props.tech.map((t) => <li>{t}</li>);

  const handleScroll = () => {
    var scroller = document.getElementById("scroller");

    var markerY = scroller?.getBoundingClientRect().y;

    if (markerY! < 75) {
      window.scrollBy(0, 0);
    }
  };

  window.addEventListener("scroll", () => handleScroll());

  return (
    <>
      <div className={s.wrapper} style={{ backgroundColor: `${props.colour}` }}>
        <div className={s.title}>
          <p style={{ textDecoration: "underline" }}>Project</p>
          <p>{props.projectName}</p>
        </div>
        <div className={s.tech}>
          <>
            <p style={{ textDecoration: "underline" }}>Tech</p>
            <ul>{techList}</ul>
          </>
        </div>
        <div className={s.description}>
          <p>{props.description}</p>
          <br />
          <a href={props.projectUrl}>
            <p>
              Check it out &nbsp;&nbsp; <img src="/src/assets/arrow.svg" />
            </p>
          </a>
        </div>

        <div className={s.gallery} id="scroller">
          <div
            className={s.galleryItem}
            style={{ backgroundImage: `url("/src/assets/app_one.png")` }}
          />
          <div
            className={s.galleryItem}
            style={{ backgroundImage: `url("/src/assets/app_one.png")` }}
          />
          <div
            className={s.galleryItem}
            style={{ backgroundImage: `url("/src/assets/app_one.png")` }}
          />
          <div
            className={s.galleryItem}
            style={{ backgroundImage: `url("/src/assets/app_one.png")` }}
          />
        </div>
      </div>
    </>
  );
}
