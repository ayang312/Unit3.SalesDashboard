import React, { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Box
      sx={{
        width: "250px",
        backgroundColor: "#f4f4f4",
        padding: "20px",
        height: "100vh",
      }}
    >
      <IconButton onClick={() => setOpen(true)} sx={{ margin: "10px" }}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{ width: "240px", flexShrink: 0 }}
      >
        <List sx={{ width: "240px" }}>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Transactions" />
          </ListItem>
        </List>
      </Drawer>
      <Typography variant="h5" fontWeight="bold">
        Yang's Restaurant
      </Typography>
      <Typography variant="subtitle1" color="green">
        Owner
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="FAQ" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
