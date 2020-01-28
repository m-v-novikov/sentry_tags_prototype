import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
// import * as Sentry from '@sentry/browser';
import { withRouter } from "react-router";
import App from "./App";
import About from "./About";
import Users from "./Users";
import User from "./User";

const AppRouter = (props) => {
  // useEffect(() => {
  //   const group = props.location.pathname.replace(/^\//, '').split('/')[0];
  //   console.log(group);
  //   Sentry.withScope(scope => {
  //     scope.setTag(`own-tag`, group);
  //   });
  // });

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/52">User</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users" exact={true}>
          <Users />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </div>
  )
};

export default withRouter(AppRouter);