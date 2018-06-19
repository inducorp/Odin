import React from "react";
import injectSheet from "react-jss";

import Navigation from "~/components/Navigation";
import { Link } from "react-router-dom";

function Topic(props) {
  const { match, classes } = props;
  console.log(match);
  return (
    <div className={classes.base}>
      <Navigation />
      <h1>Discrete mathematics</h1>
      <h2>Prerequisites</h2>
      <ul>
        <li>
          <Link to="/topic/linear_algebra">Linear algebra</Link>
        </li>
        <li>
          <Link to="/topic/linear_algebra2">Linear algebra2</Link>
        </li>
      </ul>
      <h2>Resources</h2>
      <article>
        <header>
          <h3>Introduction to Discrete Mathematics</h3>
          <p>by Rallemus</p>
        </header>
        <p>
          Quisque mattis dolor vel nulla fringilla tristique. Integer orci
          felis, cursus id pretium a, ultrices sed nisl. Sed sodales leo ac
          vulputate vestibulum. Etiam vulputate feugiat consectetur.{" "}
        </p>
      </article>
      <h2>Postrequisites</h2>
      <ul>
        <li><Link to='/topic/discreter_mathematics'>Discreter Mathematics</Link></li>
      </ul>
    </div>
  );
}

const styles = {
  base: {
    //
  }
};

export default injectSheet(styles)(Topic);
