import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg'

const ExpComponent = ({ year, title, description, url }) => {
    const [inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });
  return (
    <div>
<motion.div
      className="contactInfo"
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Card className="card" style={{ width: '30rem' }}>
               
               <div className='projectCard d-flex align-items-center justify-content-center py-10'>
               <CardImg variant="top" style={{ width: '10rem',height:'10rem' }} src={url} />
               <Card.Body>
                   <Card.Title style={{ fontSize:'2rem'}}>{year}</Card.Title>
                   <Card.Text style={{ fontSize:'2rem'}}>
                       {title}
                   </Card.Text>
                   <Card.Text>
                       {description}
                   </Card.Text>
               </Card.Body>
               </div>
               
           </Card>
      
    </motion.div>
    </div>
    
    
  );
};

export default ExpComponent;
