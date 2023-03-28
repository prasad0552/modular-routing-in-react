import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes/index";
// import RoleBasedRoute from "./components/auth";

export default function Example() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {routes.map(({ url, title, exact, component: Component }) => {
            return (
              <Route
                key={url}
                path={url}
                exact={exact}
                render={props => <Component {...props} title={title} />}
              />
            );
          })}

          {/*
            - Higher Order Componnet DEMO Example
            - you just have to wrap the component with the HOC
            - PS. RoleBasedRoute is not just a template

            <RoleBasedRoute>
              <Route>
                ...
              </Route>
            </RoleBasedRoute>
          */}
        </Switch>
      </div>
    </Router>
  );
}
