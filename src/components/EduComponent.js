import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg'
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import closeModal from "../images/close.svg";




const EduComponent = ({ year, title, description, url,id,color }) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
      });
    
      const variants = {
        hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };
    
      Modal.setAppElement("#root");
    
      const [showModal, setShowModal] = useState(false);
      const handleOpenModal = () => setShowModal(true);
      const handleCloseModal = () => setShowModal(false);
    
      return (
        <motion.div
          ref={ref}
          className="col-sm-12 col-lg-6"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div
            style={{ backgroundColor: color }}
            className="projectCard d-flex align-items-center justify-content-center p-5"
            
          >
            <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
              <p className="tech">
                <em>{year}</em>
              </p>
              <h3 className="projectTitle">{title}</h3>
              
            </div>
            <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
              <img src={url} alt="Laptop displaying application" />
            </div>
          </div>
          <Modal
            isOpen={showModal}
            onRequestClose={handleCloseModal}
            style={{
              content: {
                backgroundColor: "#101010",
                color: "#9f9f9f",
                padding: "60px",
                display: "flex",
                flexDirection: "column",
                width: "400px",
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                zIndex: "999",
              },
            }}
          >
            <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
            <h3 className="modalTitle">{title}</h3>
            <p className="projectDescription">{description}</p>
           
          </Modal>
        </motion.div>
      );
    };
export default EduComponent;
