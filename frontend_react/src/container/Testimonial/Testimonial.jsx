import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper/export";
import { urlFor, client } from "../../client";

import "./Testimonial.scss";

function Testimonial() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    client
      .fetch('*[_type == "testimonials"]')
      .then((data) => setTestimonials(data))
      .catch((error) => console.log(error));
    client
      .fetch('*[_type == "brands"]')
      .then((data) => setBrands(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(testimonials[currentIndex].imgurl)}
              alt="testimonial"
            />
          </div>
        </>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
