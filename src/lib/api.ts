
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatResponse {
  message: string;
  error?: string;
}

export const sendChatMessage = async (messages: ChatMessage[]): Promise<ChatResponse> => {
  try {
    // This would connect to your backend API endpoint
    // For now, it's a placeholder that demonstrates the expected structure
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages,
        model: 'gpt-4',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    return {
      message: '',
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// Utility function to prepare messages for the API
export const formatMessagesForAPI = (messages: { role: string; content: string }[]) => {
  return messages.map(msg => ({
    role: msg.role as 'user' | 'assistant',
    content: msg.content
  }));
};
