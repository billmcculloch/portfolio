import { useEffect, useRef, useState } from "react";
import s from "./About.module.scss";

import profileImage from "/src/assets/profile-pic.jpg";

function About() {
  return (
    <div className={s.wrapper} id={"about"}>
      <div className={s.textarea}>
        <p>
          Welcome to my portfolio! I’ve been lucky enough to work on some
          exciting projects from start to finish as a Junior Developer at Roady,
          including working in a team of two to build and release the Roady App,
          customer web portal and API. This has given me exposure to modern
          technologies including Flutter, React, Typescript, GraphQL, Node.js to
          name a few. 
        </p>
        <p>
          I’m always looking to learn and grow as a developer, and with a
          background in marketing it’s not surprising that I’ve found a passion
          for building beautiful user experiences for both mobile and the web. 
        </p>
        <p>
          I’m available for work in London from July 2023, so get in touch and
          let’s make something awesome together.
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
