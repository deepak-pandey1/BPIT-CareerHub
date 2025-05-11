import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ChatbaseChatbot = () => {
  const location = useLocation();

  useEffect(() => {
    let script;

    const loadChatbotScript = () => {
      script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.id = 'royTwUXoNNzJhnxrn4_ag'; // Your unique bot ID
      script.domain = 'www.chatbase.co';
      document.body.appendChild(script);
      console.log('Chatbot script loaded!');
    };

    const cleanupChatbotScript = () => {
      if (script) {
        document.body.removeChild(script);
        console.log('Chatbot script removed!');
      }
    };

    // Load the chatbot script only when on /Faq
    if (location.pathname === '/Faq') {
      loadChatbotScript();
    }

    // Cleanup when leaving the FAQ page
    return () => {
      if (location.pathname !== '/Faq') {
        cleanupChatbotScript();
      }
    };
  }, [location.pathname]);

  return null; // No JSX is rendered, this component only manages the script lifecycle
};

export default ChatbaseChatbot;
