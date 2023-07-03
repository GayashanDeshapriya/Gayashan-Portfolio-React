import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyleConstants = {
  SPACE_BETWEEN_SECTIONS: 40,
  SIZE_ITEM_TITLE: 30,
};

const CertificationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

const InfoWrapper = styled(Box)(() => ({
  paddingLeft: 15,
  lineHeight: 1.53,

  "& .name": {
    marginBottom: 30,
    fontSize: StyleConstants.SIZE_ITEM_TITLE,
    color: StyleConstants.WHITE_COLOR,
  },
  "& .actions": {
    margin: "10px 0",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  paddingRight: 40,
  width: 400,
  minHeight: 200,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: StyleConstants.WHITE_COLOR,
  "& img": {
    width: 400,
  },
  [theme.breakpoints.down("sm")]: {
    width: 325,
    "& img": {
      width: 325,
    },
  },
}));

const Certificates = ({
  name = "",
  org = "",
  issued = "",
  expiry = "",
  credentialId = "",
  credentialUrl = "",
  url = "",
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

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
  };

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
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12">
            <div className="textContainer" style={styles.textContainer}>
              
                <CertificationWrapper responsive={responsive}>
                <motion.div
                    className=""
                    ref={ref}
                    initial={{ x: "-10vw", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                 >
                  <ImageBox>
                    <img src={url} alt="certificate" />
                  </ImageBox>
                  </motion.div>

                  <motion.div
                className="skills"
                ref={ref}
                initial={{ x: "10vw", opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                 >
                <InfoWrapper>
                    <div className="name"><h6>{name}</h6></div>
                    <div>
                      <b></b> {org}
                    </div>
                    <div>
                      <b>Issued:</b> {issued}
                    </div>
                    {expiry && (
                      <div>
                        <b>Expiry:</b> {expiry}
                      </div>
                    )}
                    {credentialId && (
                      <div>
                        <b>Id:</b> {credentialId}
                      </div>
                    )}
                    <div className="col-12 formGroup formSubmit">
                      <button type="submit" className="btn">
                        <Link to={credentialUrl} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                          View Certificate
                        </Link>
                      </button>
                    </div>
                  </InfoWrapper>
              </motion.div>
                  
                </CertificationWrapper>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
