import s from "./Project.module.scss";

import arrow from "/arrow.svg";

interface ProjectProps {
  imagesPortrait: boolean;
  description: string;
  tech: Array<string>;
  images?: Array<string>;
  projectName: string;
  projectUrl: string;
  colour: string;
}

export default function Project(props: ProjectProps) {
  const techList = props.tech.map((t) => <li>{t}</li>);

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
          <a href={props.projectUrl} target={"_blank"}>
            <p>
              Check it out &nbsp;&nbsp; <img src={arrow} />
            </p>
          </a>
        </div>

        <div className={s.gallery}>
          <>
            {props.images?.map((i) => (
              <div
                className={
                  props.imagesPortrait ? s.galleryItem : s.galleryLandscape
                }
                style={{ backgroundImage: `url(${i})` }}
              />
            ))}
          </>
        </div>
      </div>
    </>
  );
}
