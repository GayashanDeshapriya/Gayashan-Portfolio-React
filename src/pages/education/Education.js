import { motion } from "framer-motion";
import SocialIcons from "../../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import EduComponent from "../../components/EduComponent";
import ExpComponent from "../../components/ExpComponent";
import EducationData from "./edu.json";



const Education = () => {

  const EducationList = () =>
        EducationData.map((Education, i) => (
            <Education
                key={i}
                id={Education.id}
                year={Education.year}
                title={Education.title}
                description={Education.description}
            />
        ));

  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <EduComponent />
          </div>
          <div className="col-12 col-lg-6">
            <ExpComponent  />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Education;
