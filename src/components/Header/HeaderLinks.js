  /*eslint-disable*/
  import React from "react";
  import DeleteIcon from "@material-ui/icons/Delete";
  import IconButton from "@material-ui/core/IconButton";
  // react components for routing our app without refresh
  import { Link } from "react-router-dom";
  // @material-ui/core components
  import { makeStyles } from "@material-ui/core/styles";
  import List from "@material-ui/core/List";
  import ListItem from "@material-ui/core/ListItem";
  import Tooltip from "@material-ui/core/Tooltip";
  // @material-ui/icons
  import { Apps, CloudDownload } from "@material-ui/icons";
  // core components
  import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
  import Button from "components/CustomButtons/Button.js";
  import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";


  const useStyles = makeStyles(styles);
  export default function HeaderLinks(props) {
    const classes = useStyles();
    return ( 
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Home"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              target="_blank"

              onClick={async () => {props.history.push('/');}}
              
              className={classes.navLink}
            >
              <i className={classes.socialIcons }/>
            Home</Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Products"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/new" className={classes.dropdownLink}>New items</Link>,
              <Link to="/decor" className={classes.dropdownLink}>Decor</Link>,
              <Link to="/bath" className={classes.dropdownLink}>Bath</Link>,
              <Link to="/gifts" className={classes.dropdownLink}>Gifts</Link>,
            ]}
          />
        </ListItem>
      
       {/*<ListItem className={classes.listItem}>
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
         <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>*/}
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="About us"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
            onClick={async () => {props.history.push('/aboutus');}}
              color="transparent"
              href=""
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons } />
            About us</Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="FAQs"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
            onClick={async () => {props.history.push('/faqs');}}
              color="transparent"
              href=""
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons } />
            FAQs</Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Contact us"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
            onClick={async () => {props.history.push('/contactus');}}
              color="transparent"
              href=""
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons } />
            contactus</Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on Instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/joez_designs/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
              
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
