import React, { useState, useEffect } from 'react';
import axios from "axios";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardHeader from "../../components/Card/CardHeader";

import Carousel from "react-slick";
import styles from "assets/jss/material-kit-react/views/components.js";

import { GetAll } from '../../Server/Server';

const useStyles = makeStyles(styles);

const IP = 'http://3.19.79.15:5000/';


export default function Bath(props) {

  const path = 'bathproducts';
  
  var  data =  GetAll(path);
  console.log(data);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
    const classes = useStyles();
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Joez Designs"
        rightLinks={<HeaderLinks history={props.history}/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      /> 
      <Parallax image={require("assets/img/joebg2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Bath Products</h1>
                <h3 className={classes.subtitle}>

                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>  
        <div className={classes.container}>
        <br/>
          <GridContainer>
          {data.slice(0).reverse().map(item => 
            <GridItem xs={15} sm={15} md={4} >
              <Card >
              <h5 style={{display: 'flex', justifyContent: 'center'}}>{item.name}</h5>
                <CardBody> 
                  <Carousel {...settings}>
                  {item.productImage.map(photo => <div>
                      <img style={{height: 250 ,width:200}} src={IP+photo.path} alt="First slide" className="slick-image" />
                    </div>)}
                  </Carousel>
                </CardBody>
                <div style={{margin:'15px'}}>                
                      <text>Description:
                      {" "+item.desc}
                      </text>
                  <h6 style={{textAlign:'right'}}>{item.price || "N/A"} LE</h6>
                </div>
              </Card>
            </GridItem>
            )}
          </GridContainer>
          <div><br></br></div>
        </div>
      </div>
      <Footer history={props.history}/>
    </div>
  );
}
