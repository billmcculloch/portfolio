import { useEffect, useRef } from "react";
import Project from "./Project";
import s from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={s.wrapper}>
      <h1>Get in touch</h1>
      <div className={s.container}>
        <div className={s.email}>
          <p style={{ textDecoration: "underline" }}>Email</p>
          <a>
            <p>
              billrmcculloch@gmail.com <img src="/src/assets/arrow.svg" />
            </p>
          </a>
        </div>
        <div className={s.linkedIn}>
          <p style={{ textDecoration: "underline" }}>LinkedIn</p>
          <a>
            <p>
              link <img src="/src/assets/arrow.svg" />
            </p>
          </a>
        </div>
        <div className={s.github}>
          <p style={{ textDecoration: "underline" }}>GitHub</p>
          <a>
            <p>
              link <img src="/src/assets/arrow.svg" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
