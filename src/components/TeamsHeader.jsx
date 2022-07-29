import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import styles from '../styles/navbarstyles.module.css';

function TeamsHeader() {
  return (
    <Stack direction="row" justifyContent="space-between" p={2} className={styles['top-nav-bar-middle']}>
      <Stack direction="row" spacing={2} alignItems="center">
        <img src="../../cardIcons/team-vector.svg" alt="team" />
        <Typography fontWeight="bold" fontSize="30px">Teams</Typography>
      </Stack>
      <Button className={styles.teambtn} px={2} type="button" variant="contained" startIcon={<AddIcon fontWeight="bold" />}>Create new team</Button>
    </Stack>
  );
}

export default TeamsHeader;
