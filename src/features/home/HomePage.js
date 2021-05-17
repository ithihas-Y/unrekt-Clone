import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import style from "assets/jss/material-kit-pro-react/modalStyle.js";
// import { Landing } from 'features/Landing';
import { StakePage } from 'features/stake';
import { Landing } from 'features/Landing';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function HomePage() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  
  return (
    <>
      <Landing />
    </>
  );
}