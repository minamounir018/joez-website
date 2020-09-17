import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import Carousel from "react-slick";
import image1 from "assets/img/joe1.jpeg";
import image2 from "assets/img/joe1.jpeg";
import image3 from "assets/img/joe1.jpeg";
 
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div>
      <Header
        brand="Joez Designs"
        rightLinks={<HeaderLinks history={props.history}/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 250,
          color: "white"
        }}
        {...rest}
      />
      
      <Parallax image={require("assets/img/Home.JPG")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Joez</h1>
                <h3 className={classes.subtitle}>
                Add a touch of luxury to your home by shopping our mesmerizing Handmade Marble products
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>

          <GridContainer justify="center">
            <GridItem xs={10} sm={5.} md={3}>
              <h3>Discover our products</h3><br/>
            </GridItem>
          </GridContainer>



          <GridContainer>
            <GridItem xs={15} sm={15} md={4}>
              <Card>
                <CardBody>  
                  <GridContainer>
                    <GridItem xs={25} sm={25} md={15} className={classes.marginAuto}>
                      <Card carousel>
                        <Carousel {...settings}>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image1} alt="First slide" className="slick-image" />
                          </div>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image2} alt="Second slide" className="slick-image"/>
                          </div>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image3} alt="Third slide" className="slick-image" />
                          </div>
                        </Carousel>
                      </Card>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button  onClick={async () => {props.history.push('/New');}}>New Product</Button>
                </CardFooter>
              </Card>
            </GridItem>
            
            <GridItem xs={15} sm={15} md={4}>
              <Card>
                <CardBody>  
                  <GridContainer>
                    <GridItem xs={25} sm={25} md={15} className={classes.marginAuto}>
                      <Card carousel>
                        <Carousel {...settings}>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image1} alt="First slide" className="slick-image" />
                          </div>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image2} alt="Second slide" className="slick-image"/>
                          </div>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image3} alt="Third slide" className="slick-image" />
                          </div>
                        </Carousel>
                      </Card>
                    </GridItem>
                    
                  </GridContainer>
              </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button onClick={async () => {props.history.push('/gifts');}}>Gifts Product</Button>
                  </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={15} sm={15} md={4}>
              <Card>
                <CardBody>  
                  <GridContainer>
                    <GridItem xs={25} sm={25} md={15} className={classes.marginAuto}>
                      <Card carousel>
                        <Carousel {...settings}>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image1} alt="First slide" className="slick-image" />
                          </div>
                          <div>
                          <img style={{height: 250 ,width:200}} src={image1} alt="First slide" className="slick-image" />
                          </div>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image3} alt="Third slide" className="slick-image" />
                          </div>
                        </Carousel>
                      </Card>
                    </GridItem>
                  </GridContainer>
                
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button onClick={async () => {props.history.push('/decors');}}>Decor Product</Button>
                  </CardFooter>
              </Card>
            </GridItem>

            <GridItem xs={15} sm={15} md={4}>
              <Card>
                <CardBody>  
                  <GridContainer>
                    <GridItem xs={25} sm={25} md={15} className={classes.marginAuto}>
                      <Card carousel>
                        <Carousel {...settings}>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image1} alt="First slide" className="slick-image" />
                          </div>
                          <div>
                          <img style={{height: 250 ,width:200}} src={image1} alt="First slide" className="slick-image" />
                          </div>
                          <div>
                            <img style={{height: 250 ,width:200}} src={image3} alt="Third slide" className="slick-image" />
                          </div>
                        </Carousel>
                      </Card>
                    </GridItem>
                  </GridContainer>
                
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button onClick={async () => {props.history.push('/gifts');}}>Gifts Product</Button>
                  </CardFooter>
              </Card>
            </GridItem>

          </GridContainer>


          <div><br></br></div>
        </div>
      
       
       
       {/* <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
      </GridItem>*/}
       
       </div>
      <Footer history={props.history} />
      
    </div>
  );
}
