import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreVertical, Send } from "lucide-react";

const Index = () => {
  const [messages, setMessages] = useState([
    { sent: false, content: "Hey, how are you?" },
    { sent: true, content: "I'm good, thanks! How about you?" },
    { sent: false, content: "I'm doing great! Any plans for the weekend?" },
    { sent: true, content: "Not yet, maybe we could catch up?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sent: true, content: newMessage }]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src="https://github.com/shadcn.png"
            alt="User"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </header>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <Message key={index} sent={message.sent} content={message.content} />
        ))}
      </div>
      <div className="p-4 border-t flex items-center gap-2">
        <Input
          placeholder="Type a message"
          className="flex-1"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button size="icon" onClick={handleSendMessage}>
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

const Message = ({ sent, content }) => (
  <div className={`flex ${sent ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`rounded-lg p-3 max-w-[70%] ${
        sent ? 'bg-primary text-primary-foreground' : 'bg-muted'
      }`}
    >
      {content}
    </div>
  </div>
);

export default Index;