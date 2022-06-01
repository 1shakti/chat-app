import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Main from "../main";
import { ChatContent, Thumbnail } from "../sidebar/styles";
import { ChatContainer, Chats, ChatsFooter, ChatsOverflow, Container, Header, TodayDiv } from "./styles";

export default function MainContent({ children }) {
    return <Container>{children}</Container>
}

MainContent.Header = function MainContentHeader() {
    const { id } = useParams();
    const user = useSelector((state) => state.chat.users[id]);
    const name = user?.name || '';
    const nameList = name.trim().split(' ').filter((str) => str !== ' ');
    const isStarredActive = window.location.pathname.includes('starred');
    return (
        <Header>
            <ChatContent>
                <Thumbnail>
                    <p>{`${nameList[0][0]}${nameList.length > 1 ? nameList[1][0] : ''}`}</p>
                    <div></div>
                </Thumbnail>
                <div className='user-details'>
                    <p className='name'>{name}</p>
                </div>
            </ChatContent>
            <Link to={`/chats/${id}`}>
                <p className={!isStarredActive && 'active'}>Chat</p>
            </Link>
            <Link to={`/chats/${id}/starred`}>
                <p className={isStarredActive && 'active'}>Starred Message</p>
            </Link>
        </Header>
    )
}

MainContent.ChatSection = function MainContentChatSection({ children }) {
    return (
        <ChatContainer>
            {children}
        </ChatContainer>
    )
}

MainContent.ChatsOverflow = function MainContentChatsOverflow({ chatRef, children, ...props }) {
    return (
        <ChatsOverflow {...props} ref={chatRef}>{children}</ChatsOverflow>
    )
}

MainContent.Chats = function MainContentChats({ children }) {
    return (
        <Chats>
            {children}
        </Chats>
    );
}

MainContent.ChatsFooter = function MainContentChatsFooter({ inputProps, sendMessage }) {
    return (
        <ChatsFooter>
            <input {...inputProps} autoFocus placeholder="Enter your message here..." />
            <div className="options">
                <div className="left-toolbar">
                    <img src='/assets/icons/Edit.svg' alt='Edit' />
                    <img src='/assets/icons/Star.svg' alt='Star' />
                    <img src='/assets/icons/PaperClip.svg' alt='Clip' />
                    <img src='/assets/icons/Smile.svg' alt='Emojis' />
                </div>
                <img onClick={sendMessage} src='/assets/icons/Send.svg' alt="Send message" />
            </div>
        </ChatsFooter>
    )
}

MainContent.Today = function MainContentToday({ children }) {
    return (
        <TodayDiv>
            <span className="border"></span>
            <span className="text">{children}</span>
            <span className="border"></span>
        </TodayDiv>
    )
}