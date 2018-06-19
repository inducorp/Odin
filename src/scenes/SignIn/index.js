import React from "react";
import injectSheet from "react-jss";
import Navigation from '~/components/Navigation'

function SignIn(props) {
  const { classes } = props;

  return <div className={classes.base}>
    <Navigation />
    Sign In
  </div>;
}

const styles = {
  base: {
    //
  }
};

export default injectSheet(styles)(SignIn);
