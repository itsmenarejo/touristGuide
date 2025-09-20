import React from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatMessage from "./ChatMessage";
import "./Chatbot.css";

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      {/* Header */}
      <div className="chat-header">
        <div className="header-info">
          <ChatbotIcon />
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button>
          <span className="material-symbols-rounded">keyboard_arrow_down</span>
        </button>
      </div>

      {/* Chat Body */}
      <div className="chat-body">
        <ChatMessage role="model" text="Hey there 👋 How can I help you today?" />
        <ChatMessage role="user" text="How are you ?" />
        <ChatMessage role="model" text="I am good! What about you ?" />
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <form className="chat-form">
          <input
            type="text"
            placeholder="Message..."
            className="message-input"
            required
          />
          <button type="button" className="material-symbols-rounded mic">
            mic
          </button>
          <button type="submit" className="material-symbols-rounded send">
            arrow_upward
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
