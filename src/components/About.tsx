import s from "./About.module.scss";

import profileImage from "/profile-pic.jpg";

function About() {
  return (
    <div className={s.wrapper} id={"about"}>
      <div className={s.textarea}>
        <p>
          Welcome to my portfolio! In my career as a developer, I've been lucky
          enough to work on some exciting projects using modern front-end,
          back-end and mobile technologies. I love the challenge of taking a
          design and bringing it to life with clean code and the constant
          learning involved with software development.
        </p>
        <p>
          I’m currently a Front-end Engineer at Guider, a London based start-up
          building the world's most loved mentoring and peer learning software,
          trusted by global brands in 175+ countries
        </p>
      </div>
      <div className={s.profilepic}>
        <div
          className={s.img}
          style={{ backgroundImage: `url(${profileImage})` }}
        />
      </div>
    </div>
  );
}

export default About;
