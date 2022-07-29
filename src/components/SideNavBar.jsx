import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import styles from '../styles/navbarstyles.module.css';

function SideNavBar() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeClassName = 'active-link';

  return (
    <Stack className={styles.navbar} alignContent="space-between" justifyContent="space-between">
      <Stack alignContent="space-between" justifyContent="space-between" mt={3}>
        <Stack spacing={1}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <img className={styles.whaleIcon} src="../../sideBarIcons/whaleicon.svg" alt="whale" />
          </NavLink>
          <NavLink to="messages">
            {({ isActive }) => (
              <Box
                className={
                  isActive ? activeClassName : undefined
                }
                p={3}
              >
                <img src="../../sideBarIcons/Vector.svg" alt="whale" />
              </Box>
            )}
          </NavLink>

          <NavLink to="team">
            {({ isActive }) => (
              <Box
                className={
                  isActive ? activeClassName : undefined
                }
                p={3}
              >
                <img src="../../sideBarIcons/Vector-1.svg" alt="whale" />
              </Box>
            )}
          </NavLink>
          <NavLink to="profile">
            {({ isActive }) => (
              <Box
                p={3}
                className={
                  isActive ? activeClassName : undefined
                }
              >
                <img src="../../sideBarIcons/Vector-2.svg" alt="whale" />
              </Box>
            )}
          </NavLink>
          <NavLink to="stats">
            {({ isActive }) => (
              <Box
                p={3}
                className={
                  isActive ? activeClassName : undefined
                }
              >
                <img src="../../sideBarIcons/Frame.svg" alt="whale" />
              </Box>
            )}
          </NavLink>
        </Stack>
      </Stack>
      <Stack>
        <NavLink to="help">
          {({ isActive }) => (
            <Box
              p={3}
              className={
                  isActive ? activeClassName : undefined
                }
            >
              <HelpIcon sx={{ color: '#81909a', width: '30px', height: '30px' }} />
            </Box>
          )}
        </NavLink>
      </Stack>
    </Stack>
  );
}

export default SideNavBar;
