import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! 👋 I'm Kashmala's virtual assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const faqs = [
    { question: "What services do you offer?", answer: "I specialize in Flutter app development, React web applications, and AI/ML solutions. I can help you build mobile apps, web platforms, and intelligent systems!" },
    { question: "Are you available for hire?", answer: "Yes! I'm always open to exciting new projects. Feel free to reach out through the contact form or schedule a call." },
    { question: "What's your experience?", answer: "I have experience with Flutter, React, Python, TensorFlow, and more. Check out my projects section to see my work!" },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", content: input }]);
    
    // Simple FAQ matching
    const matchedFaq = faqs.find(faq => 
      input.toLowerCase().includes(faq.question.toLowerCase().split(" ")[0])
    );
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "bot",
        content: matchedFaq?.answer || "Thanks for your message! For detailed inquiries, please use the contact form and I'll get back to you soon. 😊"
      }]);
    }, 500);
    
    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center 
                  shadow-lg neon-glow"
        style={{ background: "linear-gradient(135deg, hsl(187 100% 50%), hsl(271 91% 65%))" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 glass-card rounded-2xl overflow-hidden 
                      shadow-2xl border border-glass-border"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg, hsl(187 100% 50% / 0.2), hsl(271 91% 65% / 0.2))" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Portfolio Assistant</p>
                  <p className="text-xs text-muted-foreground">Always online</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMessages([...messages, { role: "user", content: faq.question }]);
                    setTimeout(() => {
                      setMessages(prev => [...prev, { role: "bot", content: faq.answer }]);
                    }, 500);
                  }}
                  className="px-3 py-1.5 text-xs rounded-full bg-muted hover:bg-primary/20 
                            whitespace-nowrap transition-colors"
                >
                  {faq.question.slice(0, 20)}...
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-xl bg-muted border border-border 
                            focus:border-primary focus:outline-none text-sm"
                />
                <motion.button
                  onClick={handleSend}
                  className="p-2 rounded-xl bg-primary text-primary-foreground"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
