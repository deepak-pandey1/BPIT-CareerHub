import React, { useEffect, useState, useContext, useRef } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import "./Community.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";


const Community = () => {
  const { username } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageEndRef = useRef(null);

  useEffect(() => {
  // Function to fetch messages
  const fetchMessages = () => {
    axios
      .get("https://bpit-careerhub.onrender.com/api/message")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));
  };

  // Initial fetch when component mounts
  fetchMessages();

  // Set interval to fetch every 3 seconds
  const interval = setInterval(fetchMessages, 10000);

  // Clear interval when component unmounts
  return () => clearInterval(interval);
}, []);


  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    axios
      .post("https://bpit-careerhub.onrender.com/api/message", { sender: username, text: newMessage })
      .then((res) => {
        setMessages((prev) => [...prev, res.data]);
        setNewMessage("");
      })
      .catch((err) => console.error("Error sending message:", err));
  };

  return (
    <div className="community-container" style={{ position: "relative", zIndex: 1 }}>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "clamp(150px, 40vw, 300px)",
          height: "clamp(150px, 40vw, 300px)",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <DotLottieReact
          src="https://lottie.host/f440ff22-1136-4d3c-8c70-e3090ef4a166/YfjJWcTjbe.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>


      <h2 className="chat-heading" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
        <FontAwesomeIcon icon={faComments} className="fa-icon" />
        Community Chat
      </h2>

      <div className="message-box">
        {messages.length === 0 ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          messages.map((msg) => {
            const isCurrentUser = msg.sender === username;
            const dateTime = new Date(msg.createdAt);
            const formattedDate = dateTime.toLocaleDateString();
            const formattedTime = dateTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={msg._id}
                className={`message ${isCurrentUser ? "right" : "left"}`}
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
        <div ref={messageEndRef} />
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Community;