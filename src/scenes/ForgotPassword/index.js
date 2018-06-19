import React from "react";
import injectSheet from "react-jss";
import Navigation from '~/components/Navigation'

function PasswordForget(props) {
  const { classes } = props;

  return <div className={classes.base}>
    <Navigation/>
    Password forget
  </div>;
}

const styles = {
  base: {
    //
  }
};

export default injectSheet(styles)(PasswordForget);
