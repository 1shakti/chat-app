import MainContent from '../components/chat';
import Messages from './Messages';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function StarredChats() {
  const { id: userId } = useParams();
  const messages = useSelector(
    (state) => state.chat.users[userId]?.chats || []
  );
  const starredMessages = messages.filter((msg) => msg.isStarred);

  return (
    <MainContent>
      <MainContent.Header />
      <MainContent.ChatSection>
        <Messages messages={starredMessages || []} />
      </MainContent.ChatSection>
    </MainContent>
  );
}
