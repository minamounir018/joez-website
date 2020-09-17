import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionCompletedExamples from "../Components/Sections/SectionCompletedExamples.js";

import SectionCarousel from "../Components/Sections/SectionCarousel.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Shelves(props) {

    const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Joe Designs"
        rightLinks={<HeaderLinks  history={props.history}/>}
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
                <h1 className={classes.title}>Shelves Product</h1>
                <h3 className={classes.subtitle}>
                 
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/*<SectionBasics />*/}
        {/*<SectionNavbars />*/}
        {/*<SectionTabs />*/}
        {/*<SectionPills />*/}
        {/*<SectionNotifications />*/}
        {/*<SectionTypography />*/}
        {/*<SectionJavascript />*/}
        <SectionCompletedExamples/>
        <SectionCarousel/>
        {/*<SectionLogin />*/}
       
       
       {/* <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
      </GridItem>*/}
       {/* <SectionExamples />*/}
       {/* <SectionDownload />*/}
      </div>
      <Footer history={props.history} />

    </div>
  );
}
