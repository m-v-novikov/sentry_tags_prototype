import React, {useEffect} from "react";
import * as Sentry from "@sentry/browser";

const About = () => {
  const masss = 'asd';
  // useEffect(() => {
  //   Sentry.configureScope(scope => {
  //     scope.setTag('own-about', 'about');
  //   });
  // }, [])

  return (
      <div>
          <h1>About page</h1>
          <button className="about" onClick={() => [{a: 1}].map(item => masss.map((item) => item)/* console.log(item.b[`about-${Math.random()}`])*/)}>Break the About</button>
      </div>
  );
};

export default About;
