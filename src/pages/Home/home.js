import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import 'animate.css';
import landingImage from "../../images/me.svg";
import SocialIcons from "../../components/SocialIcons";


// Import statements...

const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Designer", "UI/UX Designer", "Graphic Designer", "Full-Stack Developer"];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => {
        clearInterval(ticker);
      };
    }, [text]);
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 3) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };
  
    const styles = {
        landing: {
            height: "calc(100% - 93px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        textContainer: {
            display: "flex",
            flexDirection: "column",
            letterSpacing: "1px",
            textAlign: "center",
            zIndex: "1",
            color: "#fff",
            textShadow: "1px 1px 3px #000",
        },
        name1: {
            color: "#fff",
            fontWeight: "1000",
            marginTop: "-100px",
            paddingBottom: "20px",
        },
        name2: {
            color: "#005ba5",
            fontWeight: "1000",
            marginTop: "-100px",
            paddingBottom: "20px",
        },
        landingImage: {
            position: "absolute",
            bottom: "0",
            opacity: "0.8",
            mixBlendMode: "lighten",
            height: "90%",
        },
        
    };
  
    const [ref1, inView1] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
  
    const [ref2, inView2] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
  
    return (
      <section className="landing" style={styles.landing}>
        <div className="textContainer" style={styles.textContainer}>
          <motion.h1
            className="name"
            style={styles.name1}
            ref={ref1}
            initial={{ y: "-20vw", opacity: 0 }}
            animate={inView1 ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Hi! I'm Gayashan Deshapriya
          </motion.h1>
  
          <motion.p
            className="name"
            style={styles.name2}
            ref={ref2}
            initial={{ y: "10vw", opacity: 0 }}
            animate={inView2 ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <br />{" "}
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='["Fullstack Developer", "Web Designer", "UI/UX Designer", "Graphic Designer"]'
            >
              <span className="wrap">{text}</span>
            </span>
          </motion.p>
        </div>
        <div className="image-container">
          <motion.img
            className="landingImage"
            ref={ref1} // You can choose the appropriate ref here
            initial={{ y: "10vw", opacity: 0 }}
            animate={inView1 ? { y: 0, opacity: 0.2 } : { y: "10vw", opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={styles.landingImage}
            src={landingImage}
            alt=""
          />
        </div>
        <SocialIcons />
      </section>
    );
  };
  
  export default Home;
  