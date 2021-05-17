import React, { useEffect } from 'react';
// @material-ui/core components
// @material-ui/icons
// import Close from "@material-ui/icons/Close";
// core components
// sections for this page
import StakePools from './sections/StakePools'
import appStyle from "./jss/sections/appStyle"
import { makeStyles } from "@material-ui/core/styles";
import { Col, Container, Row } from 'reactstrap'
import bgImage from "assets/img/d2.svg";

const useStyles = makeStyles(appStyle);


export default function StakePage() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);


  return (

    <>
        <div className={classes.container} >
        <div className="space-100" />
        {/* <div className="space-100" /> */}
        <div className="space-100" />
      <StakePools /> 
      <div className="space-100" />
     
      <div className="space-100" />
      </div>
    </>
  );
}