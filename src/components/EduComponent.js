import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EducationData from "../pages/education/edu.json";

const EduComponent = ({ year, title, description }) => {
    const [inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    

    return (
        <motion.div
            className="contactInfo"
            initial={{ x: "-10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <h2 className="contentTitle">Education</h2>
            <section>
                
            </section>
        </motion.div>
    );
};

export default EduComponent;
