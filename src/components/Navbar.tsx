import { Close, Menu } from "@mui/icons-material";
import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import s from "./Navbar.module.scss";

function Navbar() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setChecked(false);
    });
  }, []);

  return (
    <div className={s.wrapper} id={"burger"}>
      <nav role="navigation">
        <div id={s.menuToggle}>
          <input
            type="checkbox"
            id={"toggle"}
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
          <span></span>
          <span></span>
          <span></span>
          <ul id={s.menu}>
            <a href="/#about">
              <li>About</li>
            </a>
            <a href="/#projects">
              <li>Projects</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
