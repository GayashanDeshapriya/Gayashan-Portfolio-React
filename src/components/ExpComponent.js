import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ExpComponent = ({ name, email, location }) => {
    const [inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });
  return (
    <motion.div
      className="contactInfo"
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h2 className="contentTitle">Experience</h2>      
      
    </motion.div>
  );
};

export default ExpComponent;
