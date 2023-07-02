import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";


const StyleConstants = {
  SPACE_BETWEEN_SECTIONS: 20,
  SIZE_ITEM_TITLE: 20,
};



const CertificationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
  },
}));

const InfoWrapper = styled(Box)(() => ({
  paddingRight: 100,
  lineHeight: 1.53,
  
  "& .name": {
    marginBottom: 15,
    fontSize: StyleConstants.SIZE_ITEM_TITLE,
    color:StyleConstants.WHITE_COLOR,
  },
  "& .actions": {
    margin: "10px 0",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  marginRight:0,
  width: 400,
  minHeight: 250,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: StyleConstants.WHITE_COLOR,
  "& img": {
    width: 400,
  },
  [theme.breakpoints.down("sm")]: {
    width: 350,
    "& img": {
      width: 350,
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

  return (
    <section className="contact">
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
                <CertificationWrapper>
                  <InfoWrapper>
                    <div className="name bold">{name}</div>
                    <div>
                      <b>Org:</b> <h1>{org}</h1>
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
                    <div className="col-12 formGroup formSubmit" >
                      <button type="submit" className="btn"><Link to={credentialUrl} target="_blank" rel="noreferrer" style={{ color: "white" }}>View Certificate</Link></button>
                    </div>
                  </InfoWrapper>
                  <ImageBox>
                    <img src={url} alt="certificate" />
                  </ImageBox>
                </CertificationWrapper>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
