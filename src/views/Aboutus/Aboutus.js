import React, { useState, useEffect } from 'react';
import axios from "axios";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import video1 from "assets/img/DSC_4485.MOV";
import { Player } from 'video-react';

import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Aboutus(props) {

  const classes = useStyles();
  const { ...rest } = props;
return (
      
  <div>
        
    <Header
      brand="Joe Designs"
      rightLinks={<HeaderLinks  history={props.history}/>}
      fixed
      changeColorOnScroll={{
        height: 200,
        color: "white"
        }}
        {...rest}
    />
      
    <br/><br/><br/><br/><br/><br/><br/>

    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2 >About us</h2>
          </div>
          <div className={classes.space50}/>
            <text>
              some text.....
            </text>
            <br/><br/>
          </div>
        </div>
        
        {/*<GridContainer justify="center">
          <GridItem xs={10} sm={10} md={7}>
            <Player>
              <source src={video1} />
            </Player>
            </GridItem>
      </GridContainer>*/}
          <br/>
    </div>
    <Footer history={props.history} />
  </div>
  );
}
