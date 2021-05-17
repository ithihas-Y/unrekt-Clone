import React from "react";
// import ParticleTwo from "./Particles/ParticleTwo";
import {
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { SocialButtons } from 'components/SocialButtons'


export default function First() {
  return (
    <>
     
    <section>
      <div className="cd-section" id="testimonials">
        <div className="testimonials-1 pb-0">
        

        <Container>
        
        <Row>
        
          <Col lg="6" className="cstm_col_6">
            <img
              alt="..."
              className="img-fluid mb-3"
              src={require("assets/img/drkmgc_lg.png")}
            />
            <p className="def_p">Welcome, brave Heroes from the Kingdom of Axioms!</p>
            <p className="def_p p_txind">Through the cryptic portal you’ve crossed, unbinding yourselves from the Lands of Ethereum, and entering into the realm of magic, where new opportunities await and enchanting adventures begin. </p>
            
          </Col>
          
          <Col lg="6" className="cstm_col_7">
            <img
              alt="..."
              className="img-fluid"
              src={require("assets/img/drk_img_01.png")}
            />
          </Col>
          
        </Row>
        
      </Container>
        </div>
        
      </div>
      </section>
    </>
  );
}
