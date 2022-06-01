import { useState } from 'react';
import { timesAgo } from '../../utils/time';
import {
    Card,
  ChatContent,
  PopupInputContainer,
  SidebarContainer,
  SidebarPopupContainer,
  SideBtn,
  SideDropDown,
  SideHeader,
  SideMain,
  Thumbnail,
} from './styles';

export default function Sidebar({ children }) {
  return <SidebarContainer>{children}</SidebarContainer>;
}

Sidebar.Header = function SidebarHeader({ btnProps }) {
  return (
    <SideHeader>
      <SideDropDown>
        <p>All Chats</p>
        <img src="/assets/icons/Down.svg" alt="arrow down" />
      </SideDropDown>
      <SideBtn {...btnProps}>
        <img src="/assets/icons/Message.svg" alt="Message Icon" />
        <p>New Chat</p>
      </SideBtn>
    </SideHeader>
  );
};

Sidebar.Popup = function SidebarPopup({ inputProps }) {
  const [name, setName] = useState('');
  return (
    <SidebarPopupContainer>
      <PopupInputContainer>
        <input
          autoFocus
          value={name}
          {...inputProps}
          placeholder="Enter a contact name to get started...."
          onChange={({ target }) => setName(target.value)}
        />
        <img
          onClick={() => setName('')}
          src="/assets/icons/cross.png"
          alt="cross"
        />
      </PopupInputContainer>
    </SidebarPopupContainer>
  );
};

Sidebar.Main = function SidebarMain({ children }) {
    return (
        <SideMain>
            {children}
        </SideMain>
    )
}

Sidebar.Chatcard = function SidebarChatcard({ name, lastMessage, lastTime, ...props }) {
    const nameList = name.trim().split(' ').filter((str) => str !== ' ');
    return (
        <Card {...props}>
            <ChatContent>
                <Thumbnail>
                    <p>{`${nameList[0][0]}${nameList.length > 1 ? nameList[1][0] : ''}`}</p>
                    <div></div>
                </Thumbnail>
                <div className='user-details'>
                    <p className='name'>{name}</p>
                    <p className='message'>{lastMessage}</p>
                </div>
            </ChatContent>
            <p className='last-scene'>{lastTime ? timesAgo(Date.now(), lastTime) : ''}</p>
        </Card>
    )
}