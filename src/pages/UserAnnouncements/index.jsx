import { Stack, Box } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Notification = () => {
  return <div>aaaa</div>;
};

export const UserAnnouncementsPage = () => {
  const notifications = [
    {
      title: "Brunch this weekend?",
      sender: "Ali Connors",
      message: `- I'll be in your neighborhood doing errands this…`,
    },
    {
      title: "Summer BBQ",
      sender: "Scott, Alex, Jennifer",
      message: `- Wish I could come, but I'm out of town this…`,
    },
    {
      title: "Oui Oui",
      sender: "Sandra Adams",
      message: `- Do you have Paris recommendations? Have you ever…`,
    },
  ];
  const isProp = false;
  return (
    <List sx={{ width: "100%", maxWidth: 540, bgcolor: "background.paper" }}>
      {notifications.map((notification) => {
        return (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={notification.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {notification.sender}
                  </Typography>
                  {notification.message}
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};
