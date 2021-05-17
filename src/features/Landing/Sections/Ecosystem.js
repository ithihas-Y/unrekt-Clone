import React from 'react'
import { 
  Row,
  Container,
  Col
} from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Ecosystem () {
  return (

        <Container>
          <Row className="row-grid justify-content-center">
            <Col lg="12">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <h1 className="text-center text-tertiary">The Magic Ecosystem</h1>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        {/* <i className="tim-icons icon-bank" /> */}
                        <img src={require("assets/img/1.png")} alt='points' width="auto" height="150" />
                      </div>
                      <h4 className="info-title">Token</h4>
                      <hr className="line-primary" />
                      <p className="text-tertiary">
                        TEXT ....
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        {/* <i className="tim-icons icon-bank" /> */}
                        <img src={require("assets/img/2.png")} alt='points' width="auto" height="150" />
                      </div>
                      <h4 className="info-title">Governance</h4>
                      <hr className="line-primary" />
                      <p className="text-tertiary">
                      TEXT ....
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        {/* <i className="tim-icons icon-money-coins" /> */}
                        <img src={require("assets/img/3.png")} alt='points' width="auto" height="150" />
                      </div>
                      <h4 className="info-title">Vaults</h4>
                      <hr className="line-primary" />
                      <p className="text-tertiary">
                      TEXT ....
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        {/* <i className="tim-icons icon-lock-circle" /> */}
                        <img src={require("assets/img/4.png")} alt='points' width="auto" height="150" />
                      </div>
                      <h4 className="info-title">Services</h4>
                      <hr className="line-primary" />
                      <p>
                      TEXT ....
                      </p>
                    </div>
                  </Col>
                </Row>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>

  )
}