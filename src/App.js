import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";
const projectID="ff944ed9-3e45-40d6-a864-32b0e1b95bc1"


function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
