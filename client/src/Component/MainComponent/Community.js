import React, { useEffect, useState, useContext, useRef } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import "./Community.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Community = () => {
  const { username, loggedIn } = useContext(UserContext); // Get current user context
  const [messages, setMessages] = useState([]); // All messages
  const [newMessage, setNewMessage] = useState(""); // Input field value
  const messageEndRef = useRef(null); // Ref to auto-scroll to bottom

  // Fetch messages from backend when component mounts
  useEffect(() => {
    axios
      .get("https://bpit-careerhub.onrender.com/api/message")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a new message
  const handleSend = () => {
    if (!newMessage.trim()) return;

    axios
      .post("https://bpit-careerhub.onrender.com/api/message", { sender: username, text: newMessage })
      .then((res) => {
        setMessages((prev) => [...prev, res.data]); // Append new message
        setNewMessage(""); // Clear input
      })
      .catch((err) => console.error("Error sending message:", err));
  };

  return (
    <div className="community-container">
      {/* Heading with animated icon */}
      <h2 className="chat-heading">
        <FontAwesomeIcon icon={faComments} className="fa-icon" />
        Community Chat
      </h2>

      {/* Message box with all messages */}
      <div className="message-box">
        {messages.length === 0 ? (
          <p>No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg) => {
            const isCurrentUser = msg.sender === username; // Determine if message is from current user
            const dateTime = new Date(msg.createdAt); // Convert timestamp
            const formattedDate = dateTime.toLocaleDateString();
            const formattedTime = dateTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={msg._id}
                className={`message ${isCurrentUser ? "right" : "left"}`} // Style based on sender
              >
                <strong>{msg.sender}</strong>
                <div>{msg.text}</div>
                <div className="timestamp">
                  {formattedDate} • {formattedTime}
                </div>
              </div>
            );
          })
        )}
        <div ref={messageEndRef} /> {/* Dummy div for scroll */}
      </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()} // Send on Enter
          />
          <button onClick={handleSend}>Send</button>
        </div>
      
    </div>
  );
};

export default Community;
