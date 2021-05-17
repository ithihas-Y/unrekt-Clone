
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { SocialButtons } from 'components/SocialButtons'


export default function DemoFooter() {
  return (
    <>
      <footer className="footer"> 
        <Container>
          <Row>

            <Col md="12">
            {/* <div className="space-100" /> */}
              <div className="btn-wrapper profile text-center  ">
              <img
                        alt="..."
                        src={require("assets/img/footer_img.png")}
                        width="auto"
                      />
                    
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer_btm_frst">
          <p>follow for updates and announcements:</p>
          <div className="social_links">
            <a href="#" className="scic_01"></a>
            <a href="#" className="scic_02"></a>
            <a href="#" className="scic_03"></a>
          </div>
        </div>
        <div className="footer_btm_scnd">
          <Container>
            <Row>
              <Col md="6">© 2021 DeFi Magic. All rights reserved.</Col>
              <Col md="6" className="text-right">Made with ❤ by Bitgraphix</Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
