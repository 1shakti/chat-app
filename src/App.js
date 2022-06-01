import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import { MainContainer } from "./components/main/styles";
import NoUser from './components/no-user';
import Chats from "./containers/Chats";
import SidebarContainer from "./containers/Sidebar";
import StarredChats from "./containers/StarredChats";

function App() {
  const users = useSelector((state) => state.chat.users);

  return (
    <Router>
      <Header />
      <MainContainer>
        <SidebarContainer />
          {Object.keys(users).length === 0 ? <NoUser /> : (
            <Routes>
              <Route path="/chats/:id" element={<Chats />} />
              <Route path="/chats/:id/starred" element={<StarredChats />} />
            </Routes>
          )}
      </MainContainer>
    </Router>
  );
}

export default App;
