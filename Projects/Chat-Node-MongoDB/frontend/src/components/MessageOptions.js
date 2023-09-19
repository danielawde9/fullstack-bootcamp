// src/components/MessageOptions.js

import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const MessageOptions = ({ onUpdate, onDelete }) => {
  return (
    <ButtonGroup variant="text" size="small">
      <Button onClick={onUpdate}>Update</Button>
      <Button onClick={onDelete}>Delete</Button>
    </ButtonGroup>
  );
};

export default MessageOptions;
