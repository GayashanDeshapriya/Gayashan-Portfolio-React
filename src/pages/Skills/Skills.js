
import meter1 from "../../images/meter1.png";
import meter3 from "../../images/meter3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHeader from "../../components/PageHeader";
import { Tech } from "../../components/tech";


function Skills() {

  const styles = {
   
    textContainer: {
        display: "flex",
        flexDirection: "column",
        letterSpacing: "1px",
        textAlign: "center",
        zIndex: "1",
        color: "#fff",
        textShadow: "1px 1px 3px #000",
    },
   
    }

    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  

  return (
    <section className="contact">
      <PageHeader title="Skills & Technologies" description="explore my knowledge" />
      <div className="contactWrap container">
        <div className="row">
         <div className="col-12">
         <div className="textContainer" style={styles.textContainer}>
          <motion.div
          className="skills"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          
          
          >
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h1>Web Development</h1>
                            </div>
                            <div className="item" >
                                <img src={meter1} alt="Image" />
                                <h1>Brand Identity</h1>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h1>Logo Design</h1>
                            </div>
                            
                        </Carousel>

          </motion.div><br></br><br></br>
          
          <motion.div
          className="skills"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          
          
          >
        
          <Tech/>
          </motion.div>
            </div>
            </div>
         </div>
         
         </div>
      
      
    </section>
  )
}
export default Skills;
