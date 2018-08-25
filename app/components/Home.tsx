// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Home.css';
import * as routes from '../constants/routes.json';

export class Home extends React.Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
