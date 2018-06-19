import React from "react";
import injectSheet from "react-jss";
import Navigation from '../../components/Navigation'

function SignUp(props) {
  const { classes } = props;

  return <div className={classes.base}>
    <Navigation />
    Sign Up
  </div>;
}

const styles = {
  base: {
    //
  }
};

export default injectSheet(styles)(SignUp);
