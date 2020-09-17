import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          {/*<ListItem className={classes.inlineBlock}>
              <Button
              onClick={async () => {props.history.push('/faqs');}}
                className={classes.block}
                target="_blank"
              >
                FAQs
              </Button>
            </ListItem>
            
            <ListItem className={classes.inlineBlock}>
              <Button
              onClick={async () => {props.history.push('/contactus');}}
                className={classes.block}
                target="_blank"
              >
                Contact us
              </Button>
  </ListItem>*/}
           {/* <ListItem className={classes.inlineBlock}>
              <a
                href=""
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
  </ListItem>*/}
          </List>
        </div>
        <div className={classes.right}>
       
          &copy; {1900 + new Date().getYear()} , {/*made with{" "}
          <Favorite className={classes.icon} />*/} By{" "}<a href="https://www.instagram.com/minamounir1/" 
        target="_blank" > Mina</a> for a better web.
        </div> 
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
