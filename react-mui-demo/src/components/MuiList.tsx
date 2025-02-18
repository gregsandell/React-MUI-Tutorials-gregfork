import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  ListItemButton,
  ListItemIcon,
  Divider,
  ListItemAvatar,
  Avatar
} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

// Set the body tag in App.css to background-color: #eeeeee
export const MuiList = () => {
  return (
    <Stack sx={{ width: '400px', bgcolor: '#efefef' }} spacing={2}>
      {/*First <List> is the one at the start of the video*/}
      <List>
        <ListItem>
          <ListItemText primary='Jane Doe' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Fred Smith' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Raquel Welch' />
        </ListItem>
      </List>
      <Box sx={{ height: '100px', bgcolor: '#ffffff' }}></Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='List item 1' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <InboxIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='List item 2' secondary='Secondary text' />
        </ListItem>
        <ListItem>
          <ListItemText primary='List item 3' />
        </ListItem>
      </List>
    </Stack>
  )
}
