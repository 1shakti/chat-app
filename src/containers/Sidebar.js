import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../app/reducer';
import Sidebar from '../components/sidebar';
import { v4 as uuidv4 } from 'uuid';

export default function SidebarContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.chat.users);
  const [showPopup, setShowPopup] = useState(false);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      const name = e.target.value;
      const userId = uuidv4();
      dispatch(addUser({ userId, name }));
      navigate(`/chats/${userId}`);
      setShowPopup(false);
    }
  };

  const cards = Object.keys(users).map((userId, index) => {
    const user = users[userId];
    const chats = user.chats;
    const lastChat = chats[chats.length - 1];
    const lastTime = lastChat ? lastChat.time : '';
    const isActive = window.location.pathname.includes(userId);
    return (
      <Sidebar.Chatcard
        key={userId}
        isActive={isActive}
        name={user.name}
        lastMessage={lastChat?.message || ''}
        lastTime={lastTime}
        onClick={() => navigate(`/chats/${userId}`)}
      />
    );
  });

  return (
    <Sidebar>
      <Sidebar.Header btnProps={{ onClick: () => setShowPopup(true) }} />
      <Sidebar.Main>
        {showPopup && (
          <Sidebar.Popup inputProps={{ onKeyPress: handleEnter }} />
        )}
        {cards}
      </Sidebar.Main>
    </Sidebar>
  );
}
