import { useEffect } from 'react';

export function CustomChatbotLoader() {
  useEffect(() => {
    // Hier kannst du deinen Chatbot-Code einfügen
    // Beispiel:
    //
    // const script = document.createElement('script');
    // script.src = 'https://deine-chatbot-url.com/widget.js';
    // script.async = true;
    // document.body.appendChild(script);
    //
    // return () => {
    //   if (script.parentNode) {
    //     script.parentNode.removeChild(script);
    //   }
    // };
  }, []);

  return null;
}
