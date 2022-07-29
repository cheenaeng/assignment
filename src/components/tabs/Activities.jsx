import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import data from '../../data';

export default function Activities() {
  return (
    <>
      <Box p={3}>
        <Typography fontSize="18px" textAlign="left" fontWeight="bold">Activity</Typography>
      </Box>
      <Divider />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data.activities.map((activity) => (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={activity.person.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={`${activity.person.name} ${activity.action.split('_')[0]} ${activity.action.split('_')[1]} ${activity.target}.`}
              secondary={(
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="#565656"
                  fontSize="13px"
                >
                  {activity.created_at}
                </Typography>
          )}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
