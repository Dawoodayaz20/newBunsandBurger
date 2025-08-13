import React, { useState } from 'react';
import { askAgent } from './api'; // <-- your API function
import ReactMarkdown from 'react-markdown';
import Header from '../header/header.component';

const ChatBot = () => {
  const [question, setQuestion] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'bot', text: 'Hey! Ask me anything about our burgers, pizzas or deals 🍔 🍕.' },
  ]);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    const userMsg = { sender: 'user', text: question };
    setChatLog((prev) => [...prev, userMsg]);

    const result = await askAgent(question);
    const botMsg = { sender: 'bot', text: result };

    setChatLog((prev) => [...prev, botMsg]);
    setQuestion('');
  };

  return (
    <>
    <Header />
    <div className="w-max my-60 md:my-40 mx-auto p-4 bg-yellow-50 rounded-2xl shadow-xl border border-yellow-300">
      <h2 className="text-2xl font-bold text-center text-yellow-800 mb-4">
        🍔 Buns & Burger Assistant
      </h2>

      <div className="bg-white p-4 rounded-lg shadow-inner min-h-[200px] max-h-[300px] overflow-y-auto space-y-2">
        {chatLog.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg w-fit max-w-xs ${
              msg.sender === 'user'
                ? 'ml-auto bg-yellow-200 text-right'
                : 'mr-auto bg-yellow-100'
            }`}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(ent) => {
            if (ent.key === 'Enter') {
              handleSubmit();
            }
          }}
          placeholder="E.g. Any family deals?"
          className="flex-1 px-4 py-2 rounded-l-lg border border-yellow-400 focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded-r-lg"
        >
          Ask
        </button>
      </div>
    </div>
    </>
  );
};

export default ChatBot;
