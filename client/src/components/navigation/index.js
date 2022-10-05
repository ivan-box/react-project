import { useState } from "react";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Box,
  AppBar,
  // Button,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  // ListItemButton,
  ListItemText,
  // Divider,
} from "@mui/material";
import Hidden from "@mui/material/Hidden";
import MenuIcon from "@mui/icons-material/Menu";
// import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NewsMovies recommendation
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
