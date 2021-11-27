

import { ChatEngine } from "react-chat-engine";
import ChatFeed  from "./components/ChatFeed";

export function App() {
	return (
		<ChatEngine
      height="100vh"
      projectID="5ff80508-61b3-4a5c-9090-96493bca16a6"
      userName="nomiboydev"
      userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;
