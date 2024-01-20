import { motion } from "framer-motion";
import SocialIcons from "../../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import EduComponent from "../../components/EduComponent";
import ExpComponent from "../../components/ExpComponent";
import EducationData from "./edu.json";
import ExperienceData from "./exp.json";




const Education = () => {

  const EducationList = () =>
        EducationData.map((Education, i) => (
            <EduComponent
                key={i}
                id={Education.id}
                url={Education.url}
                year={Education.year}
                title={Education.title}
                description={Education.description}
            />
        ));

        const ExperienceList = () =>
        ExperienceData.map((Education, i) => (
            <ExpComponent
                key={i}
                id={Education.id}
                url={Education.url}
                year={Education.year}
                title={Education.title}
                description={Education.description}
            />
        ));

  return (
    <section className="contact">
      <PageHeader title="Education & Experience " description="Get in touch" />
      
      <div className="contactWrap container">
        <div className="row">
          
          <div className="col-12 col-lg-6">
            <EducationList />
          </div>
          <div className="col-12 col-lg-6">
            <ExperienceList />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Education;
