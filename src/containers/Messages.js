import MainContent from "../components/chat";
import Message from "../components/message";
import { deleteMessage, starMessage } from '../app/reducer';
import { getTimeFromSeconds } from '../utils/time';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NoMessage from "../components/no-message";

export default function Messages({ chatRef, messages }) {
    const dispatch = useDispatch();
    const { id: userId } = useParams();

  const handleToolClicks = (type, id) => {
    if (type === 'star') {
        dispatch(starMessage({ userId, id }))
    }
    if (type === 'delete') {
        dispatch(deleteMessage({ userId, id }))
    }
  }
    return (
        <MainContent.ChatsOverflow chatRef={chatRef}>
          {messages.length === 0 ? <NoMessage /> : (
            <>
              <MainContent.Today>Today</MainContent.Today>
              <MainContent.Chats>
                {messages.map((msg) => (
                  <Message key={msg.id}>
                    <Message.Time isStarred={msg.isStarred}>{getTimeFromSeconds(msg.time)}</Message.Time>
                    <Message.Text>{msg.message}</Message.Text>
                    <Message.Tool className="tool">
                      <img onClick={() => handleToolClicks('star', msg.id)} src="/assets/icons/Star.svg" alt="Star message" />
                      <img
                        onClick={() => handleToolClicks('delete', msg.id)}
                        src="/assets/icons/trash-icon.svg"
                        alt="Delete message"
                      />
                      <img src="/assets/icons/share-icon.svg" alt="Share message" />
                    </Message.Tool>
                  </Message>
                ))}
              </MainContent.Chats>
            </>
          )}
        </MainContent.ChatsOverflow>
    )
}