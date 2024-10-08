import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import icon1 from "../images/Icons/JavaScript.svg";
import icon2 from "../images/Icons/ExpressJS-Dark.svg";
import icon3 from "../images/Icons/Kotlin-Dark.svg";
import icon4 from "../images/Icons/NodeJS-Dark.svg";
import icon5 from "../images/Icons/AndroidStudio-Dark.svg";
import icon6 from "../images/Icons/DotNet.svg";
import icon7 from "../images/Icons/HTML.svg";
import icon8 from "../images/Icons/CSS.svg";
import icon9 from "../images/Icons/React-Dark.svg";
import icon10 from "../images/Icons/Flutter-Dark.svg";
import icon11 from "../images/Icons/CPP.svg";
import icon12 from "../images/Icons/CS.svg";
import icon13 from "../images/Icons/Github-Dark.svg";
import icon14 from "../images/Icons/microsoft-sql-server-logo-svgrepo-com.svg";
import icon15 from "../images/Icons/Azure-Dark.svg";
import icon16 from "../images/Icons/MongoDB.svg";
import icon17 from "../images/Icons/Firebase-Dark.svg";
import icon18 from "../images/Icons/Angular-Dark.svg";
import icon19 from "../images/Icons/Git.svg";




const Root = styled.div`
  padding: 10px;
  border-radius: 8px;
`;

const GridItemWrapper = styled.div`
  /* Your styles for GridItemWrapper component */
`;

const GridItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const IconStyle = {
  width: "100px",
  height: "100px",
  padding: "20px"
};

const rowStyle = {
  marginbottom: "150px"
}

export const Tech = () => {
  return (
    <Root>
      <Container fluid>
        <Row style={rowStyle}><h1>Front-end vs. back-end languages</h1>
        <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon7} alt="Blue Eyes Dragon" style={IconStyle} />
                <p>HTML</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon8} alt="Blue Eyes Dragon" style={IconStyle} />
                <p>CSS</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon1} alt="Blue Eyes Dragon" style={IconStyle} />
                <p>JS</p>
              </GridItemContent>
            </GridItemWrapper>
         </Col>
         {/* <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon11} alt="Blue Eyes Dragon" style={IconStyle} />
                <p>PHP</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col> */}
          
          <Row style={rowStyle}><h1>Programming Languages</h1>
         
         <Col lg={2} md={3} sm={4} xs={6}>
           <GridItemWrapper>
             <GridItemContent>
               <img src={icon11} alt="Blue Eyes Dragon" style={IconStyle} />
               <p>C++</p>
             </GridItemContent>
           </GridItemWrapper>
         </Col>

         <Col lg={2} md={3} sm={4} xs={6}>
           <GridItemWrapper>
             <GridItemContent>
               <img src={icon12} alt="Blue Eyes Dragon" style={IconStyle} />
               <p>C#</p>
             </GridItemContent>
           </GridItemWrapper>
         </Col>
         
         
         
         </Row> 

         <Row  style={rowStyle}><h2>Frameworks and Libraries</h2>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon9} alt="Blue Eyes Dragon" style={IconStyle} />
                <p>React</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon18} alt="Blue Eyes Dragon" style={IconStyle} />
                <p>Angular</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon4} alt="Spell Caster" style={IconStyle} />
                <p>Nodejs</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon2} alt="Summoned Skull" style={IconStyle} />
                <p>express js</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
           <GridItemWrapper>
             <GridItemContent>
               <img src={icon6} alt="Blue Eyes Dragon" style={IconStyle} />
               <p>Dot Net</p>
             </GridItemContent>
           </GridItemWrapper>
         </Col>
         </Row>
          
          
          
         
          
          
         <Row  style={rowStyle}>
         <h1>Mobile App Development</h1>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon5} alt="Summoned Skull" style={IconStyle} />
                <p>Android Studio</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon3} alt="Summoned Skull" style={IconStyle} />
                <p>Kotlin</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon10} alt="Summoned Skull" style={IconStyle} />
                <p>Flutter</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>

         </Row>
          
          <h1>Database Technologies</h1>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon14} alt="Summoned Skull" style={IconStyle} />
                <p>Ms SQL</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>

          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon16} alt="Summoned Skull" style={IconStyle} />
                <p>MongoDB</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon17} alt="Summoned Skull" style={IconStyle} />
                <p>Firebase</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>


          <h1>Other Essential Technologies</h1>

          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon19} alt="Summoned Skull" style={IconStyle} />
                <p>Git</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon13} alt="Summoned Skull" style={IconStyle} />
                <p>GitHub</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>

          <Col lg={2} md={3} sm={4} xs={6}>
            <GridItemWrapper>
              <GridItemContent>
                <img src={icon15} alt="Summoned Skull" style={IconStyle} />
                <p>Azure</p>
              </GridItemContent>
            </GridItemWrapper>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};
