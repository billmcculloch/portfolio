import { useEffect, useRef } from "react";
import s from "./Project.module.scss";

interface ProjectProps {
  description: string;
  tech: Array<string>;
  projectName: string;
  projectUrl: string;
  colour: string;
}

export default function Project(props: ProjectProps) {
  const techList = props.tech.map((t) => <li>{t}</li>);
  return (
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
    </div>
  );
}
