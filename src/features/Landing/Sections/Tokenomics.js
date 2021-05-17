import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardHeader,
  CardFooter,
  ListGroupItem,
  ListGroup,
} from "reactstrap";

export default function Tokenomics() {

  return (
    <>

        <section className="section_lst section section-lg section-coins mt-0 pt-0 pb-0">

          <Container>
            <Row className="align-items-end">
              <Col md="6" className="lstpdng_lft">
                <h1>
                  Magic :
                  <span className="text-info"> Tokenomics</span>
                </h1>
                <p className="def_p">Defi Magic is a burning utility token ecosystem. An ever-expanding product-based platform with value based on use-case and functionality.  </p>
              </Col>
              <Col md="6" className="text-center pd-90">
                <img
                    alt="..."
                    className="img-center img-fluid img_mns_mrgn"
                    src={require("assets/img/mgk_ls_img.png")}
                  />
              </Col>
            </Row>
            <Row>
            <Col md="3">
                <Card className="card-coin card-plain crd_c_bl">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/lst_img_01.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">DARK MAGIC</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Total Supply: 4,000,000</ListGroupItem>
                        <ListGroupItem>Tx Fee</ListGroupItem>
                        <ListGroupItem>Minted: </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get Magic
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-coin card-plain crd_c_bl">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/lst_img_03.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">DRAX</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Total Supply: </ListGroupItem>
                        <ListGroupItem>Tx Fee</ListGroupItem>
                        <ListGroupItem>Minted: </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                    Get Magic
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/lst_img_02.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">COMING SOON</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Total Supply: </ListGroupItem>
                        <ListGroupItem>Tx Fee</ListGroupItem>
                        <ListGroupItem>Minted: </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get Magic
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/lst_img_04.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">COMING SOON</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Total Supply: 4,000,000</ListGroupItem>
                        <ListGroupItem>Tx Fee</ListGroupItem>
                        <ListGroupItem>Minted: </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get Magic
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              
            </Row>
          </Container>
        </section>

    </>
  );
}
