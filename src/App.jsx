import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import SideNavBar from './components/SideNavBar';
import Teams from './components/Teams';
import styles from './styles/navbarstyles.module.css';

function App() {
  return (
    <div className="App">
      <Container fixed className={styles.mainContainer}>
        <Routes>
          <Route path="/" />
          <Route path="team" element={<Teams />} />
          <Route path="profile" />
          <Route path="stats" />
          <Route path="help" />
        </Routes>
      </Container>
      <SideNavBar />
    </div>
  );
}

export default App;
