/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styles from '../../styles/teams.module.css';

function SelectedTab({ selectedData, title }) {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography fontSize="14px" sx={{ color: '#7F7F7F' }}>
          Showing
          {' '}
          {selectedData.length}
          {' '}
          out of
          {' '}
          {selectedData.length}
          {' '}
          teams
        </Typography>
      </Stack>
      <Divider />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={2}>
        {selectedData.map((team) => (
          <Grid item xs={4}>
            <Box className={styles['team-card']}>
              <Stack direction="row" spacing={2}>
                <div>
                  <img src={team.image} alt="icon" className={styles['icon-companies']} />
                </div>
                <Stack flex={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <div className={styles['team-card-company-title']}>{team.name}</div>
                  </Stack>
                  {team.created_at
                   && (
                   <div className={styles['team-card-company-created']}>
                     Created
                     {' '}
                     {team.created_at}
                   </div>
                   )}
                </Stack>
                <Stack justifyContent="flex-end" alignSelf="flex-start">
                  {team.is_favorited
                    ? <img src="../../cardIcons/star-active.svg" alt="favorite" />
                    : <img src="../../cardIcons/star-outline.svg" alt="favorite" />}
                </Stack>
              </Stack>
              <Box className={styles['icon-companies-description']}>
                {team.description}
              </Box>
              <Stack direction="row" spacing={2} className={styles['icon-companies-bottom']}>
                <Stack direction="row">
                  <img src="../../sideBarIcons/Vector.svg" alt="icon" className={styles['icon-bottom']} />
                  <Typography fontSize="13px" lineHeight="16px">
                    {team.campaigns_count}
                    {' '}
                    Campaigns
                  </Typography>
                </Stack>
                <Box>
                  <Stack direction="row">
                    <img src="../../sideBarIcons/Vector-2.svg" alt="icon" className={styles['icon-bottom']} />
                    <Typography fontSize="13px" lineHeight="16px">
                      {team.leads_count}
                      {' '}
                      Leads
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
}

export default SelectedTab;
