// src/App.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatList from "./components/ChatList";
import ChatInput from "./components/ChatInput";
import { getPosts, createPost, deletePost, updatePost } from "./api";

const App = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getPosts()
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Failed to load messages: ", error);
      });
  }, [messages]);

  const handleSendMessage = (content) => {
    const newMessage = {
      title: "chat-message",
      content,
      author: "User", 
    };
    createPost(newMessage)
      .then(() => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      })
      .catch((error) => {
        console.error("Failed to send message: ", error);
      });
  };

  const handleUpdateMessage = (postId, updatedContent) => {
    const updatedMessage = {
      title: "chat-message",
      content: updatedContent,
      author: "User", 
    };
    updatePost(postId, updatedMessage)
      .then(() => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) => (msg.id === postId ? updatedMessage : msg))
        );
      })
      .catch((error) => {
        console.error("Failed to update message: ", error);
      });
  };

  const handleDeleteMessage = (postId) => {
    deletePost(postId)
      .then(() => {
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== postId)
        );
      })
      .catch((error) => {
        console.error("Failed to delete message: ", error);
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <ChatList
        messages={messages}
        onUpdate={handleUpdateMessage}
        onDelete={handleDeleteMessage}
      />
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default App;
