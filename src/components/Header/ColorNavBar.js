import React, { useState, useEffect, useRef } from 'react'
import logo from 'assets/img/logo2.png';
import vault from 'assets/img/vault2.svg';
import vault_g from 'assets/img/vault2_g.svg';
import wrapper from 'assets/img/wrapper.svg';
import wrapper_g from 'assets/img/wrapper_g.svg';
import zapper from 'assets/img/zapper.svg';
import zapper_b from 'assets/img/zapper_b.svg';
import home from 'assets/img/home.svg';
import home_g from 'assets/img/home_g.svg';

import { useHistory } from 'react-router-dom';
import { Button, Collapse, NavbarBrand, Navbar, NavItem, Nav, Container, Row, Col, } from "reactstrap";
import { Link } from 'react-router-dom';
import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { renderIcon } from '@download/blockies'

const useStyles = makeStyles(styles);


export default function ColorNavBar(props) {
  let history = useHistory();
  const { connected, address, connectWallet, disconnectWallet } = props;

  const [isCollapsed, setCollapsed] = useState(true);
  const canvasRef = useRef(null)
  const [shortAddress, setShortAddress] = useState('');
  const [dataUrl, setDataUrl] = useState(null);
  const classes = useStyles();

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };

  useEffect(() => {
    if (!connected) return;
    const canvas = canvasRef.current
    renderIcon({ seed: address.toLowerCase() }, canvas)
    const updatedDataUrl = canvas.toDataURL()
    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl)
    }
    if (address.length < 11) {
      setShortAddress(address)
    } else {
      setShortAddress(`${address.slice(0, 6)}...${address.slice(-4)}`)
    }
  }, [dataUrl, address])

  return (
    <Navbar className={"fixed-top " + navbarColor} expand="lg">

      <Container>
        <div className="navbar-translate">


          <div className="  navbar-logo ">
            <img
              alt="..."
              className="navbar-logo"
              src={require("assets/img/spell.png")}
            />


          </div>
          <button
            aria-expanded={!isCollapsed}
            className="navbar-toggler navbar-toggler"
            onClick={() => setCollapsed(!isCollapsed)}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end "}
          isOpen={!isCollapsed}
          navbar
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                Dark Magic
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={!isCollapsed}
                  className="navbar-toggler"
                  onClick={() => setCollapsed(!isCollapsed)}
                >
                  <span className="navbar-toggler-bar bar4" />
                  <span className="navbar-toggler-bar bar5" />
                  <span className="navbar-toggler-bar bar6" />
                </button>
              </Col>
            </Row>
          </div>

          <Nav navbar>
            <NavItem >
              <img
                className="mr-2 fr_def"
                width="25"
                height="auto"
                background-color="#000000"
                src={home}
                alt="logo"
              />
              <img
                className="mr-2 fr_active"
                width="25"
                height="auto"
                background-color="#000000"
                src={home_g}
                alt="logo"
              />
              <Link className="nav-link" to="/" onClick={() => !isCollapsed && setCollapsed(true)}>
                Home

              </Link>

            </NavItem>
            {/*             <NavItem></NavItem>
            <NavItem >
            <img
              className="mr-2 fr_def"
              width="25"
              height="auto" 
              background-color="#000000"
              src={wrapper}
              alt="logo"
            />
            <img
              className="mr-2 fr_active"
              width="25"
              height="auto" 
              background-color="#000000"
              src={wrapper_g}
              alt="logo"
            />
            
              <Link className="nav-link" to="/liquidity" onClick={() => !isCollapsed && setCollapsed(true)}>
                Drax
              </Link>
            </NavItem> */}
            {/* <NavItem>
              <img
                className="mr-2 fr_def"
                width="25"
                height="auto" 
                background-color="#000000"
                src={zapper}
                alt="logo"
              />
              <img
                className="mr-2 fr_active"
                width="25"
                height="auto" 
                background-color="#000000"
                src={zapper_b}
                alt="logo"
              />
              
                <Link className="nav-link" to="/liquidity" onClick={() => !isCollapsed && setCollapsed(true)}>
                  Drax
                </Link>
              
            </NavItem> */}


            <NavItem >
              <img
                className="mr-2 fr_def"
                width="25"
                height="auto"
                background-color="#000000"
                src={vault}
                alt="logo"
              />
              <img
                className="mr-2 fr_active"
                width="25"
                height="auto"
                background-color="#000000"
                src={vault_g}
                alt="logo"
              />
              <Link className="nav-link" to="/rekt" onClick={() => !isCollapsed && setCollapsed(true)}>

                Rekt
              </Link>
            </NavItem>




            <NavItem>
              <Button
                style={{
                  marginLeft: 95, marginRight: 0, height: 40, width: 280, fontWeight: "550",
                  fontFamily: 'Helvetica',
                  fontSize: '16px',
                }}

                type="button"
                color="primary"
                onClick={connected ? disconnectWallet : connectWallet}
              >
                {connected ? (
                  <>
                    <img
                      alt="..."
                      src={require("assets/img/wallet_icon.svg")}
                      height="100%"
                    /> {" "}{""}

                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                    {shortAddress}
                  </>
                ) : (
                  <>
                    {('Wallet')}
                  </>
                )}
              </Button>

            </NavItem>
          </Nav>
        </Collapse>
      </Container>


    </Navbar>
  )
}

// 115   <ConnectButton style={{marginLeft: 8}} />

