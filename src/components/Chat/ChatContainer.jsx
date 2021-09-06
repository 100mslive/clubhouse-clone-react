import React from 'react';
import ChatFeed from './ChatFeed';
import ChatInput from './ChatInput';
import ChatLayout from './ChatLayout';

const ChatContainer = () => {
  const [chatInput, setChatInput] = React.useState('');
  const sendMessage = () => {};
  return (
    <ChatLayout>
      <ChatFeed></ChatFeed>
      <ChatInput
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        onKeyPress={() => {
          sendMessage();
        }}
      />
    </ChatLayout>
  );
};

export default ChatContainer;
