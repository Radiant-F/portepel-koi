import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper/export";

import "./About.scss";

const aboutsLocal = [
  {
    title: "Mobile Development",
    description: "Scalability as it finest.",
    imgUrl: images.about01,
  },
  {
    title: "UI/UX",
    description:
      "Sending messages from UI to client in a beautiful way and polished manner to achive amazing UX.",
    imgUrl: images.about02,
  },
  {
    title: "Backend Development",
    description: "As structured as possible, as cleanly as possible.",
    imgUrl: images.about03,
  },
  {
    title: "MERN Stack",
    description: "The stack I mostly use.",
    imgUrl: images.about04,
  },
];

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client
      .fetch(query)
      .then((data) => setAbouts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Doing <span>a Great Work</span>
        <br />
        Is to <span> Love What You Do</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
