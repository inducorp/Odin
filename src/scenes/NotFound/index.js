import React from "react";
import injectSheet from "react-jss";

function NotFound(props) {
  const { classes } = props;

  return <div className={classes.base}>
    404 not found, bitch.
  </div>;
}

const styles = {
  base: {
    //
  }
};

export default injectSheet(styles)(NotFound);
