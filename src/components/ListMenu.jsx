import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";
import "../style/sidebar.css";

function ListMenu() {
  const [open, setOpen] = React.useState(false);
  const navitgate = useNavigate();
  return (
    <List
      className="sidebar-list"
      sx={{ borderBottom: "1px solid cadetblue", marginLeft: "10px" }}
    >
      <ListItem disablePadding>
        <ListItemButton
          className="sidebar-list-button"
          onClick={() => {
            navitgate("/personlPage");
          }}
        >
          <ListItemIcon>
            <AssignmentIndIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Trang cá nhân" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          className="sidebar-list-button"
          onClick={() => {
            navitgate("/profile");
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Thông tin cá nhân" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          className="sidebar-list-button"
          onClick={() => {
            navitgate("/login");
          }}
        >
          <ListItemIcon className="sidebar-list-icon">
            <LogoutIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Đăng xuất" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default ListMenu;
