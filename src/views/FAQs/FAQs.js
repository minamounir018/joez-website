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
import CustomInput from "components/CustomInput/CustomInput.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionCompletedExamples from "../Components/Sections/SectionCompletedExamples.js";

import SectionCarousel from "../Components/Sections/SectionCarousel.js";
import SectionBasics from "../Components/Sections/SectionBasics.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function FAQs(props) {

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
          <h2>FAQs</h2>
        </div>
        <div className={classes.space50} />  
        <h3>What about joe Designs?</h3>
        <h5>Marble hand made poducts.</h5>
      </div>
      <br/>
    </div>

        {/*<SectionNavbars />*/}
        {/*<SectionTabs />*/}
        {/*<SectionPills />*/}
        {/*<SectionNotifications />*/}
        {/*<SectionTypography />*/}
        {/*<SectionJavascript />*/}
        {/*<SectionCarousel/>*/}
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
