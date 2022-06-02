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

  const handleClick = (index) => setCurrentIndex(index);

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={
                "https://images.unsplash.com/photo-1653933445220-bdf46e0d5bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              }
              alt="testimonial"
            />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
