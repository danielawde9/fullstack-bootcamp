// src/components/ChatList.js

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import MessageOptions from "./MessageOptions";

const ChatList = ({ messages, onUpdate, onDelete }) => {
  return (
    <List>
      {messages.map((message, index) => (
        <ListItem key={index}>
          <ListItemText primary={message.author} secondary={message._id} />
          <ListItemSecondaryAction>
            <MessageOptions
              onUpdate={() => onUpdate(message._id)}
              onDelete={() => onDelete(message._id)}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
