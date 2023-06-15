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
          <a href={"mailto: billrmcculloch@gmail.com"}>
            <p>
              billrmcculloch@gmail.com &nbsp;&nbsp;
              <img src="/src/assets/arrow.svg" />
            </p>
          </a>
        </div>
        <div className={s.linkedIn}>
          <p style={{ textDecoration: "underline" }}>LinkedIn</p>
          <a href={"https://www.linkedin.com/in/bill-mcculloch/"}>
            <p>
              linkedin.com/in/bill-mcculloch &nbsp;&nbsp;
              <img src="/src/assets/arrow.svg" />
            </p>
          </a>
        </div>
        <div className={s.github}>
          <p style={{ textDecoration: "underline" }}>GitHub</p>
          <a href={"https://github.com/billmcculloch"}>
            <p>
              github.com/billmcculloch &nbsp;&nbsp;
              <img src="/src/assets/arrow.svg" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
