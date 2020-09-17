import React, { useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";

import { postContactUS } from '../../Server/Server';

const useStyles = makeStyles(styles);

export default function Contactus(props) {

  const [email, setemail] = useState();
  const [question, setquestion] = useState();

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
              <h2>Contact US</h2>
            </div>
          <div className={classes.space50} />
            <div id="inputs">
              <div className={classes.title}>
                <h3>        </h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4} lg={4}>
                  <CustomInput
                    type='email'
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{onChange:(e)=> setemail(e.target.value), value: email}}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="Question?"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{onChange:(e)=> setquestion(e.target.value), value: question}}
                  />
                </GridItem>
              </GridContainer>
              
              <GridContainer>
                <GridItem xs={12} sm={4} md={4} lg={3}>
                  <Button onClick={async () =>{
                   await postContactUS(email, question)
                   props.history.push('/');
                   }}>Send</Button>
                
                   </GridItem>
              </GridContainer>
            
                <br/>
            </div>
          </div>
        </div>
      </div>
      <Footer history={props.history} />
    </div>
  );
}
