import s from "./Contact.module.scss";
import arrow from "/arrow.svg";

export default function Contact() {
  return (
    <div className={s.wrapper}>
      <h1>Get in touch</h1>
      <div className={s.container}>
        <div className={s.email}>
          <p style={{ textDecoration: "underline" }}>Email</p>
          <a href={"mailto: billrmcculloch@gmail.com"} target={"_blank"}>
            <p>
              billrmcculloch@gmail.com &nbsp;&nbsp;
              <img src={arrow} />
            </p>
          </a>
        </div>
        <div className={s.linkedIn}>
          <p style={{ textDecoration: "underline" }}>LinkedIn</p>
          <a
            href={"https://www.linkedin.com/in/bill-mcculloch/"}
            target={"_blank"}
          >
            <p>
              linkedin.com/in/bill-mcculloch &nbsp;&nbsp;
              <img src={arrow} />
            </p>
          </a>
        </div>
        <div className={s.github}>
          <p style={{ textDecoration: "underline" }}>GitHub</p>
          <a href={"https://github.com/billmcculloch"} target={"_blank"}>
            <p>
              github.com/billmcculloch &nbsp;&nbsp;
              <img src={arrow} />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
