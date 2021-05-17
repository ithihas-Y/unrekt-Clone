import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { StakePool }  from './sections'
import appStyle from "./jss/sections/appStyle"
import { makeStyles } from "@material-ui/core/styles";
import { Col, Container, Row } from 'reactstrap'
import bgImage from "assets/img/d2.svg";

const useStyles = makeStyles(appStyle);


export default function PoolPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const [ index ] = useState(Number(props.match.params.index) - 1);

  useEffect(() => {
   
    if(index != 0 && index != 1 &&  index != 2) return history.push('/stake')
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [index]);
  return (
    <>
       <div className="space-100" />
       <div className="space-100" />
       <div className={classes.container} >
      <StakePool {...props}/>
      </div>
    </>
  );
}