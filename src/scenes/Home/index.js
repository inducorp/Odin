import React from "react";
import injectSheet from "react-jss";
import Navigation from '../../components/Navigation'

function Home(props) {
  const { classes } = props;

  return <div className={classes.base}>
    <Navigation />
    Homo
  </div>;
}

const styles = {
  base: {
    //
  }
};

export default injectSheet(styles)(Home);
