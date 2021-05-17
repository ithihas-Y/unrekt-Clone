import React from "react";

import {
  Container,
  Row,
  Col,

} from "reactstrap";
import { SocialButtons } from 'components/SocialButtons'



export const Headers = () => {
  return (
    <>
      <div className="cd-section" id="headers">
        <div className="header header-4">
          <div className="header-wrapper">

            <div className="page-header header-video header-filter">
              <div />
              <video
                autoPlay="manually"
                loop="loop"
                muted="muted"
                playsInline="playsinline"
              >
                <source
                  src={require("assets/video/magic_teaser.mp4")}
                  type="video/mp4"
                />
              </video>


              <Row>
                <Col className="mt-5 text-center d-nn" lg="6" xl="4"></Col>
                <Col className="mt-5 text-center" lg="6" xl="8">
                  <div className="space-100 d-nn" />
                  {/* <div className="space-100" /> */}
                  {/* <div className="space-100" />
                  <div className="space-100" /> */}

                  <img


                    src={require("assets/img/bnnr_img.png")}
                    width="auto"
                  />
                  <div className="social_links">
                    <a href="#" className="scic_01"></a>
                    <a href="#" className="scic_02"></a>
                    <a href="#" className="scic_03"></a>
                  </div>
                  {/* <Row>
                    <Col className="mb-3" md="12" sm="8">

                      <Col className="ml-auto mt-5 text-center" lg="12" md="5">

                        <Container>
                          <SocialButtons />
                          <div className="btn-wrapper profile text-center ">
                            <img
                              alt="..."
                              height="40"
                              src={require("assets/img/poweredby.png")}
                              width="auto"
                            />
                          </div>
                        </Container>
                      </Col>
                    </Col>




                  </Row> */}
                </Col>

              </Row>



            </div>

          </div>

        </div>

      </div>{" "}
    </>
  );
}


