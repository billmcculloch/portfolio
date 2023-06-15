import { useEffect, useRef } from "react";
import Project from "./Project";
import s from "./Projects.module.scss";

import vars from "../styles/_exports.module.scss";

export default function Projects() {
  return (
    <div className={s.wrapper}>
      <h1>My Projects</h1>
      <Project
        projectName={"The Roady App"}
        tech={["Flutter", "bloc"]}
        images={[
          "/src/assets/app_one.png",
          "/src/assets/app_two.png",
          "/src/assets/app_three.png",
          "/src/assets/app_four.png",
        ]}
        colour={vars.green}
        imagesPortrait={true}
        projectUrl={"https://apps.apple.com/nz/app/roady/id1614907429"}
        description={
          "I played a key role in the end to end build and release of the Roady App. This included building frontend widgets, consuming data from our GraphQL API and state management using bloc. The Roady App ranks in the Top 100 for Travel Apps on the App Store, with a rating of 4.7 and over 30,000 downloads since launching in June 2022."
        }
      />
      <Project
        projectName={"Roady Customer Portal"}
        tech={["React", "Typescript", "Sass", "GraphQL", "Vite"]}
        images={["/src/assets/portal_one.png", "/src/assets/portal_two.png"]}
        colour={vars.green}
        imagesPortrait={false}
        projectUrl={"https://dashboard.roady.co.nz/login"}
        description={
          "With the Roady App released, we built React web app written in Typescript to create and manage content on the app. This included an integration with Stripe to allow customer subscriptions, a key revenue stream for Roady. Examples of my contribution included building reusable components and setting up the authentication, leveraging the existing AWS Cognito infrastructure used for the Roady App."
        }
      />
      <Project
        imagesPortrait={false}
        projectName={"Mousse Music"}
        tech={["React", "Gatsby", "Shopify"]}
        colour={vars.orange}
        projectUrl={"www.moussemusic.com"}
        images={["/src/assets/mousse_one.png", "/src/assets/mousse_two.png"]}
        description={
          "In my spare time I built a website for Mousse, a friends band. I used Gatsby to ensure the site was performant, and I enjoyed the challenge of adding e-commerce functionality to a static site. I achieved this using webhooks between Shopify and Netlify."
        }
      />
    </div>
  );
}
