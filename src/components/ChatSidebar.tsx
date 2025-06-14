
import { useState } from 'react';
import { Plus, Search, MessageSquare, Code, User, Palette, Archive, Settings, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const gptItems = [
    { name: 'ChatGPT 4o', icon: MessageSquare, isActive: true },
    { name: 'Codex', icon: Code },
    { name: 'Sora', icon: Archive },
    { name: 'GPTs', icon: Settings },
    { name: 'Python Helper', icon: Code },
    { name: 'Article Assistant', icon: MessageSquare },
    { name: 'Canva', icon: Palette },
    { name: 'Flowbite GPT', icon: Code },
  ];

  const chatHistory = [
    'React OpenAI Chat App',
    'Figma to ReactJS Code',
    'WTC to Newark PATH Time',
    'Fixing JSON Schema Error',
    'Create Newsletter with SMTP',
    'Footer Section Styling',
    'Newsletter vs Email Campaign',
    'Beaten Exclude Folders',
  ];

  if (isCollapsed) {
    return (
      <div className="w-16 bg-gray-900 border-r border-gray-700 flex flex-col">
        <Button
          variant="ghost"
          size="icon"
          className="m-2 text-gray-400 hover:text-white"
          onClick={() => setIsCollapsed(false)}
        >
          <MessageSquare className="w-5 h-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col h-full">
      {/* Header */}
      <div className="p-3 border-b border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm"></div>
            <span className="font-semibold text-white">ChatGPT 4o</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white border-gray-600 justify-start">
          <Plus className="w-4 h-4 mr-2" />
          New chat
        </Button>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-gray-700">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search chats"
            className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      {/* Library */}
      <div className="p-3 border-b border-gray-700">
        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
          <Archive className="w-4 h-4 mr-2" />
          Library
        </Button>
      </div>

      {/* GPT Models */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-3">
          {gptItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer mb-1 ${
                item.isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                item.isActive ? 'bg-blue-600' : 'bg-gray-700'
              }`}>
                <item.icon className="w-3 h-3" />
              </div>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>

        {/* New Project */}
        <div className="p-3 border-t border-gray-700">
          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
            <Plus className="w-4 h-4 mr-2" />
            New project
          </Button>
        </div>

        {/* Chat History */}
        <div className="p-3">
          <h3 className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Chats</h3>
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="text-sm text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-lg cursor-pointer mb-1 truncate"
            >
              {chat}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-700">
        <div className="text-xs text-gray-400 mb-2">
          <span className="text-blue-400">Unlimited access</span>, team features, and more
        </div>
        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
          <User className="w-4 h-4 mr-2" />
          View plans
        </Button>
      </div>
    </div>
  );
};

export default ChatSidebar;
