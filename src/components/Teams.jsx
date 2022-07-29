import React from 'react';
import Topheader from './TopHeader';
import styles from '../styles/teams.module.css';
import TeamsHeader from './TeamsHeader';
import TeamTabs from './TeamTabs';

function Teams() {
  return (
    <div className={styles.container}>
      <Topheader />
      <TeamsHeader />
      <TeamTabs />
    </div>
  );
}

export default Teams;
