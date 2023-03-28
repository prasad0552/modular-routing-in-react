import React from "react";
import { Route } from "react-router-dom";

// Assumptions
const Redirect = <p>Redirect</p>;

const RoleBasedRoute = ({
  component: Component,
  userRoles,
  requiredPermissionRole,
  isSubscriptionExpired,
  ...rest
}) => {
  const hasAccessToRoute = false; // not real!
  const isSysAdmin = false; // not real!

  if (!isSysAdmin && isSubscriptionExpired) {
    return <Redirect to="/where-admins-go-😎" />;
  }
  return (
    <Route
      {...rest}
      render={props => {
        if (hasAccessToRoute) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: "/where-you-should-be"
            }}
          />
        );
      }}
    />
  );
};

export default RoleBasedRoute;
