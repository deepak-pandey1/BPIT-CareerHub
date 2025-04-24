import React, { useEffect, useState, useContext, useRef } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import "./Community.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faReply } from "@fortawesome/free-solid-svg-icons";

const Community = () => {
  const { username, loggedIn } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const messageEndRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://bpit-careerhub.onrender.com/api/message")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const payload = {
      sender: username,
      text: newMessage,
      replyToId: replyTo?._id || null,
    };

    axios
      .post("https://bpit-careerhub.onrender.com/api/message", payload)
      .then((res) => {
        setMessages((prev) => [...prev, res.data]);
        setNewMessage("");
        setReplyTo(null);
      })
      .catch((err) => console.error("Error sending message:", err));
  };

  return (
    <div className="community-container">
      <h2
        className="chat-heading"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
      >
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
                {/* Reply icon */}
                <button
                  className="reply-btn"
                  onClick={() => setReplyTo(msg)}
                  aria-label="Reply"
                >
                  <FontAwesomeIcon icon={faReply} />
                </button>

                <strong>{msg.sender}</strong>

                {/* Show in‑reply preview inside bubble */}
                {msg.replyTo && (
                  <div className="in-reply-to">
                    ↳ <strong>{msg.replyTo.sender}</strong>: {msg.replyTo.text}
                  </div>
                )}

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

      {/* Reply preview above input */}
      {replyTo && (
        <div className="reply-preview">
          <FontAwesomeIcon icon={faReply} className="preview-icon" />
          Replying to <strong>{replyTo.sender}</strong>: “
          {replyTo.text.length > 30
            ? replyTo.text.slice(0, 27) + "…"
            : replyTo.text}
          ”
          <button
            className="cancel-reply"
            onClick={() => setReplyTo(null)}
            aria-label="Cancel reply"
          >
            ×
          </button>
        </div>
      )}

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
