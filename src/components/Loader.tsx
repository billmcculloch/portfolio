import { useState } from "react";
import Typewriter from "typewriter-effect";
import s from "./Loader.module.scss";

interface LoadingProps {
  typingFinish: VoidFunction;
}

function Loader({ typingFinish }: LoadingProps) {
  return (
    <div className={s.wrapper}>
      <p>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Accessing the mainframe...")
              .start()
              .pauseFor(300)
              .callFunction(typingFinish);
          }}
        />
      </p>
    </div>
  );
}

export default Loader;
