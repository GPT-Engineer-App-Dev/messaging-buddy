import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreVertical, Send } from "lucide-react";

const Index = () => {
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
        <Message sent={false} content="Hey, how are you?" />
        <Message sent={true} content="I'm good, thanks! How about you?" />
        <Message sent={false} content="I'm doing great! Any plans for the weekend?" />
        <Message sent={true} content="Not yet, maybe we could catch up?" />
      </div>
      <div className="p-4 border-t flex items-center gap-2">
        <Input placeholder="Type a message" className="flex-1" />
        <Button size="icon">
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