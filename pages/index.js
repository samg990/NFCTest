import React, { useState } from 'react';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Home from "./Home"
import styles from './Home/Home.module.css';




// App Component
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className={styles.mainContent}>
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
