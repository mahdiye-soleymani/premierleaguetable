import React from 'react';
import {weekspicker,matchdate, matchresult, teams } from './Components';
import styles from './App.module.css';
//import { fetchData } from './api';
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <weekspicker />
        <matchdate />
        <matchresult />
        <teams />
        
      </div>
    )
  }
}

export default App

