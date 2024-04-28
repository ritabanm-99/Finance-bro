import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Wealth = () => {
  // This function runs when the widget is opened or the user sends a message.
  const handleNewUserMessage = (newMessage) => {
    // Now send the message through the backend API
    // You would send 'newMessage' to your backend service here and get a response
    // As an example, we are adding a hardcoded response
    addResponseMessage("Thanks for your message! We're processing your request.");
  };

  return (
    <div style={{ position: 'relative', marginBottom: '50px' }}>
      <h1>Wealth Management Chatbot</h1>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Have questions about wealth management? Our chatbot is here to help you. 
        Click the chat icon on the bottom right to start the conversation.
      </p>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Wealth Management"
        subtitle="Ask me anything about wealth management"
      />
    </div>
  );
};

export default Wealth;
