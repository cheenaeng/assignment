/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import SelectedTab from './tabs/SelectedTab';
import styles from '../styles/teams.module.css';
import Activities from './tabs/Activities';
import data from '../data';
import SearchInput from './SearchInput';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TeamTabs() {
  const [value, setValue] = useState(0);
  const [selectedData, setSelectedData] = useState(data.teams);
  const [title, setTitle] = useState('All Teams');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setSelectedData(data.teams);
      setTitle('All Teams');
    } else if (newValue === 1) {
      const filteredFavorites = data.teams.filter((team) => team.is_favorited);
      setSelectedData(filteredFavorites);
      setTitle('Favorites');
    } else {
      const filteredArchived = data.teams.filter((team) => team.is_archived);
      setSelectedData(filteredArchived);
      setTitle('Archived');
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack sx={{ borderBottom: 1, borderColor: 'divider' }} direction="row" justifyContent="space-between" className={styles['nav-tabs']}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ textTransform: 'capitalize', fontWeight: 'bold' }} label="All" {...a11yProps(0)} />
          <Tab sx={{ textTransform: 'capitalize', fontWeight: 'bold' }} label="Favorites" {...a11yProps(1)} />
          <Tab sx={{ textTransform: 'capitalize', fontWeight: 'bold' }} label="Archived" {...a11yProps(2)} />
        </Tabs>
        <SearchInput />
      </Stack>
      <Stack direction="row" spacing={4} m={3}>
        <Box className={styles.tabsContainer}>
          <TabPanel value={value} index={value}>
            <SelectedTab selectedData={selectedData} title={title} />
          </TabPanel>
        </Box>
        <Box className={styles.activitiesContainer}>
          <Activities />
        </Box>
      </Stack>
    </Box>
  );
}
