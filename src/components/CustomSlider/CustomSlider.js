import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import Slider from '@material-ui/core/Slider';
import { makeStyles } from "@material-ui/core/styles";
import bgImage from "assets/img/SliderButton.svg";


const useStyles = makeStyles({
    depositedBalanceSliderRoot:{
        color:'#0d805a',
        
    },
    depositedBalanceSliderMarkLabel:{
        color:'#ffffff',

    },
    track: {
        backgroundImage: "linear-gradient(.25turn, #0d805a, #00ff50)",
        height: '10px',
        
      },
    depositedBalanceSliderRail:{
        backgroundImage: "linear-gradient(.25turn, #0d805a, #00ff50)",
        height: '10px'
          },

    depositedBalanceSliderMark:{
        height:'10px',
        width: '3px',
        backgroundImage: "linear-gradient(.25turn, #0d805a, #00ff50)",
    },
    thumb: {
        height: 31,
        width: 31,
        backgroundImage:  ' url(' + bgImage + ')',
        marginTop: -8,
        marginLeft: -12,
        "&:focus,&:hover,&$active": {
          boxShadow: "inherit"
        }
      },

});

export default function CustomSlider(props) {
    const commonStyle = useStyles();
    const commonClasses = {
        root: commonStyle.depositedBalanceSliderRoot,
        markLabel: commonStyle.depositedBalanceSliderMarkLabel,
        rail:commonStyle.depositedBalanceSliderRail,
        mark:commonStyle.depositedBalanceSliderMark,
        track: commonStyle.track,
        thumb: commonStyle.thumb
        
    };
    const {
        classes
    } = props;
    return (
        <Slider 
            {...props}
            classes={Object.assign({},commonClasses,classes)}
            />
    )
}

CustomSlider.defaultProps = {
    defaultValue: 0,
    marks:[
      {
          value: 0,
          label: '0%',
        },
        {
          value: 25,
          label: '25%',
        },
        {
          value: 50,
          label: '50%',
        },
        {
          value: 75,
          label: '75%',
        },
        {
          value: 100,
          label: '100%',
        },
    ]
};

CustomSlider.propTypes = {
    classes:PropTypes.object,
    ariaLabelledby:PropTypes.string,
    defaultValue:PropTypes.number,
    valueLabelDisplay:PropTypes.string,
    marks:PropTypes.array,
};
  