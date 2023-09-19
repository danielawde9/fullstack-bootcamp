// src/components/ChatInput.js

import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item xs={10}>
        <TextField
          label="Type a message"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default ChatInput;
