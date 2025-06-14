
import { useState } from 'react';
import { Plus, Search, MessageSquare, MoreHorizontal, User, Settings, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const chatHistory = [
    'React OpenAI Chat App',
    'Figma to ReactJS Code', 
    'WTC to Newark PATH Time',
    'Fixing JSON Schema Error',
    'Create Newsletter with SMTP',
    'Footer Section Styling',
    'Newsletter vs Email Campaign',
    'Beaten Exclude Folders',
    'Python Data Analysis',
    'CSS Grid Layout Help',
    'API Integration Guide',
    'React State Management'
  ];

  if (isCollapsed) {
    return (
      <div className="w-12 bg-gray-900 border-r border-gray-800 flex flex-col">
        <Button
          variant="ghost"
          size="icon"
          className="m-2 text-gray-400 hover:text-white hover:bg-gray-800"
          onClick={() => setIsCollapsed(false)}
        >
          <MessageSquare className="w-5 h-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-full">
      {/* Header */}
      <div className="p-2">
        <Button 
          className="w-full bg-transparent hover:bg-gray-800 text-white border border-gray-600 hover:border-gray-500 justify-start text-sm font-normal h-11"
          onClick={() => {/* TODO: Start new chat */}}
        >
          <Plus className="w-4 h-4 mr-2" />
          New chat
        </Button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="space-y-1">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="group flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-800 text-gray-300 hover:text-white"
            >
              <div className="flex items-center space-x-2 flex-1 min-w-0">
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm truncate">{chat}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <MoreHorizontal className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 p-2">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 h-10">
            <User className="w-4 h-4 mr-2" />
            Upgrade plan
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 h-10">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
