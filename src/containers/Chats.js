import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  newMessage } from '../app/reducer';
import MainContent from '../components/chat';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import Messages from './Messages';

export default function Chats() {
  const dispatch = useDispatch();
  const chatRef = useRef(null);
  const { id: userId } = useParams();
  const [message, setMessage] = useState('');

  const users = useSelector(
    (state) => state.chat.users
  );


  const messages = users[userId]?.chats

  const sendMessage = () => {
    if (message.length === 0) return;
    const id = uuidv4();
    dispatch(newMessage({ userId, id, message, time: Date.now() }));
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
    setMessage('');
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <MainContent>
      <MainContent.Header />
      <MainContent.ChatSection>
        <Messages chatRef={chatRef} messages={messages || []} />
        <MainContent.ChatsFooter
          inputProps={{
            onChange: ({ target }) => setMessage(target.value),
            onKeyPress: handleEnter,
            value: message,
          }}
          sendMessage={sendMessage}
        />
      </MainContent.ChatSection>
    </MainContent>
  );
}
