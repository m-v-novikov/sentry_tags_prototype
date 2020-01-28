import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from '@sentry/browser';
import AppRouter from "./AppRouter";
import {
  BrowserRouter as Router,
} from "react-router-dom";

Sentry.init({
  dsn: "https://9a67a5d5227945d89c457f8006316864@sentry.io/1894969",
  beforeSend: function(event, hint) {
    const group = window.location.pathname.replace(/^\//, '').split('/')[0];
    event.tags = event.tags || {};
    event.tags.ownTag = group;
    return event;
  }
});

ReactDOM.render(
     <Router>
       <AppRouter />
     </Router>
  , document.getElementById('root'));

