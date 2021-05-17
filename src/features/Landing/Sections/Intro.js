import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Intro() {

  return (
    <>
      <div className="cd-section" id="testimonials">

        <div className="testimonials-3 pt-0 pb-0">


          <Container>
            <Row className="row-grid justify-content-between align-items-center text-left">
            </Row>
            <Row>
            <Col lg="7">
              <img
                alt="..."
                className="img-fluid mb-3"
                src={require("assets/img/drk_img_02.png")}
              />
            </Col>
            <Col lg="5" className="fr_rsp_p">
              <p className="def_p p_txind">The Wizards of the Cypher Guild, once trapped in the Mystical Cube and now possessed by its powerful ancient magic, have escaped across their liquid portal into the Smartlands of Binance. Meanwhile the Emerald Dragons, whos’ mighty breath of dark magic helped free the wizards, have returned through the Gateway of Hash, and back to the stone Mountains of Polygon.</p>
              <p className="def_p p_txind">Your quest to harness the all-powerful ancient magic released from the mystical cube starts now. Are you wise and brave enough to challenge the Wizards as they conquer the Smartlands of Binance? Or will you test your agility and cunning in the jagged Mountains of Polygon, daring to face a sleeping dragon while they guard their treasures?</p>
              <p className="def_p p_txind">The most formidable and the most foolhardy amongst you will try both.</p>
              <p className="def_p p_txind">To those of greatest courage, I leave you with this sacred blessing: “May the heavens of good fortune shine upon you. When there is fear, breathe deep, be brave and hold strong. When blood pours and the weak tremble, be bold and gather, as bleeding will always stop. When your load is heavy with ample bounty, be thankful, humble and in gratitude, and most important you must rest and take profit, so you can do battle another day.”</p>
              <p className="def_p pr-205">
                -LairTu<br />
                The noble and mighty paladin
              </p>
            </Col>
              {/* <div
                className="carousel slide carousel-team"
                id="carousel-testimonials3"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="info text-left bg-dark">
                      <div className="icon icon-white">
                      <p className="subtitle text-secondary">
                      Your gateway
                      </p>
                      </div>
                      <p className="description text-white">
                      Your gateway to cutting edge projects, all powered by BInance Smart Chain...
                      Your gateway to cutting edge projects, all powered by BInance Smart Chain...
                      Your gateway to cutting edge projects, all powered by BInance Smart Chain...
                      </p>
                      <div className="author">
                      
                        <span>Leaf, Axioms</span>
                      </div>
                    </div>
                    <Card
                      className="card-blog card-background"
                      data-animation={true}
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/magic_gateway.jpg")
                               +
                            ")",
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom ml-auto">
                        
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                </div>
              </div> */}
            </Row>
          </Container>
        </div>
 
      </div>
      <div className="whatis_sc">
        <Container>
            <Row className="row-grid justify-content-between">
              <Col lg="5" className="cstm_col_6 cstm_pdng">
                <img
                  alt="..."
                  className="img-fluid mb-3"
                  src={require("assets/img/wtis_img.png")}
                />
                <p className="def_p p_txind">	Magic is a unique cross chain DeFi ecosystem project built upon a modular open framework, whose codebase is future proof, easily upgradeable, and continuously evolving. As decentralized finance continues its technological growth and evolution, so too will Defi Magic.</p>
              </Col>
              <Col lg="7" className="cstm_col_7">
              <img
                  alt="..."
                  className="img-fluid mb-3"
                  src={require("assets/img/drk_img_03.png")}
                />
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}
