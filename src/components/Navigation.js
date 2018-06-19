import React from "react";
import injectSheet from "react-jss";

import { Link } from "react-router-dom";

function Navigation(props) {
  const { classes } = props;

  return (
    <div className={classes.base}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
        <li>
          <Link to="/forgot_password">Forgot Password?</Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  base: {
    //
  }
};

export default injectSheet(styles)(Navigation);
