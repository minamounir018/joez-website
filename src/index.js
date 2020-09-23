import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import Components from "views/Components/Components.js";
import NewProductPage from "views/AllProducts/New.js";
import DecorPage from "views/AllProducts/Decor.js";
import BathPage from "views/AllProducts/Bath.js";
import GiftsPage from "views/AllProducts/Gifts.js";
import AboutusPage from "views/Aboutus/Aboutus.js";
import ContactusPage from "views/Contactus/Contactus.js";
import FAQsPage from "views/FAQs/FAQs.js";

var hist = createBrowserHistory(); 

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route exact path="/new" component={NewProductPage}/>
    <Route exact path="/decor" component={DecorPage}/>
    <Route exact path="/bath" component={BathPage}/>
    <Route exact path="/gifts" component={GiftsPage}/>
    <Route exact path="/aboutus" component={AboutusPage}/>
    <Route exact path="/contactus" component={ContactusPage}/>
    <Route exact path="/faqs" component={FAQsPage}/>
    <Route exact path="/" component={Components}/>
    <Redirect from="/" to="/"/>
    </Switch>
  </Router>,
  document.getElementById("root")
);