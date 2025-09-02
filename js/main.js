// Chat bot
import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://www.n8n.electricoo.com/webhook/d6810493-7269-4f7d-82f6-1c0d2d869b79/chat',
  target: '#mi-chat',
  mode: 'fullscreen',
  showWelcomeScreen: false,
  defaultLanguage: 'es',
  initialMessages: [
    "📣 Soy un asistente virtual de demostración.",
    "Puedo mostrarte cómo funcionaría un chatbot para hacer presupuestos."
  ],
  i18n: {
    es: {
      title: 'Chatbot Demo 💬',
      subtitle: 'Presupuestos orientativos por email',
      footer: '',
      getStarted: 'Nueva conversación',
      inputPlaceholder: 'Escribe aquí...',
      poweredBy: 'Desarrollado con n8n',
      footer: 'AI Professionals',
      
    },
  },
});

// Actualiza el año en el footer
document.getElementById('current-year').textContent = new Date().getFullYear();
