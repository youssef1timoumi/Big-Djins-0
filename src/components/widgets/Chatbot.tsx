'use client';

import { useEffect, useState } from "react";
import { getChatbotResponse, loadChatbotData } from "./chatbotData";
import Image from "next/image";

type ContactFormData = {
  name: string;
  lastName: string;
  email: string;
  textarea: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>(["Hi! How can I help you today?"]);
  const [input, setInput] = useState("");
  const [faqOptions, setFaqOptions] = useState<string[]>([]);
  const [helpMode, setHelpMode] = useState(false);
  const [contactStep, setContactStep] = useState<keyof ContactFormData | null>(null);
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  // Show chatbot after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Load Q&A
  useEffect(() => {
    loadChatbotData().then((map) => {
      console.log("Setting faqOptions:", Object.keys(map));
      setFaqOptions(Object.keys(map || {}));
    });
  }, []);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, `You: ${trimmed}`]);

    if (helpMode) {
      handleHelpFlow(trimmed);
    } else {
      const lower = trimmed.toLowerCase();
      if (["hi", "hello", "hey"].includes(lower)) {
        setMessages(prev => [...prev, "Bot: Hello! 👋 How can I help you today?"]);
      } else {
        const response = getChatbotResponse(lower);
        if (response === "__SHOW_CONTACT_FORM__") {
          setMessages(prev => [...prev, "Bot: Sorry, I didn't quite understand. Could you try rephrasing?"]);
        } else {
          setMessages(prev => [...prev, `Bot: ${response}`]);
        }
      }
    }
    setInput("");
  };

  const startHelpFlow = () => {
    setHelpMode(true);
    setContactStep("name");
    setMessages(prev => [...prev, "Bot: Okay! Let's get you some help. What's your **first name**?"]);
  };

  const handleHelpFlow = async (answer: string) => {
    if (!contactStep) return;

    const nextFormData = { ...formData, [contactStep]: answer };
    setFormData(nextFormData);

    const steps: (keyof ContactFormData)[] = ["name", "lastName", "email", "textarea"];
    const currentIndex = steps.indexOf(contactStep);

    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
      setContactStep(nextStep);

      const prompts: Record<keyof ContactFormData, string> = {
        name: "What's your **first name**?",
        lastName: "Got it. And your **last name**?",
        email: "Cool! Now what's your **email address**?",
        textarea: "Finally, tell us **how we can help you**.",
      };

      setMessages(prev => [...prev, `Bot: ${prompts[nextStep]}`]);
    } else {
      try {
        const body = new FormData();
        Object.entries(nextFormData).forEach(([key, value]) =>
          body.append(key, value || "")
        );

        body.append("checkboxes", "privacy");
        body.append("checkboxes", "updates");

        const res = await fetch("/api/contact", {
          method: "POST",
          body,
        });

        if (res.ok) {
          setMessages(prev => [...prev, "Bot: Thanks! Your message has been sent. We'll get back to you soon."]);
        } else {
          throw new Error("Server error");
        }
      } catch (err) {
        setMessages(prev => [...prev, "Bot: Oops! Something went wrong submitting your request."]);
      }

      setHelpMode(false);
      setContactStep(null);
      setFormData({});
    }
  };

  const handleFAQClick = (question: string) => {
    setInput(question);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="relative rounded-full bg-white p-2 shadow-lg transition hover:scale-105 bg-white:bg-slate-800"
        >
          <Image
            src="/Djins.png"
            alt="Chatbot Icon"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
            1
          </span>
        </button>
      )}

      {open && (
        <div className="w-80 bg-white border shadow-xl rounded-lg p-4 text-sm dark:bg-slate-900">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-gray-800 dark:text-white">Support Chat</div>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="h-48 overflow-y-auto mb-2 border p-2 rounded bg-gray-50 dark:bg-slate-800 dark:text-white">
            {messages.map((msg, i) => <div key={i}>{msg}</div>)}
          </div>

          {!helpMode && (
            <div className="mb-2">
              <p className="font-semibold">FAQ:</p>
              {faqOptions.map((q, i) => (
                <div key={i}>
                  <button
                    className="text-left text-blue-600 underline text-xs"
                    onClick={() => handleFAQClick(q)}
                  >
                    {q}
                  </button>
                </div>
              ))}
            </div>
          )}

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="w-full border p-1 rounded dark:bg-slate-700 dark:text-white"
          />
          <div className="mt-2 flex justify-between items-center">
            <button onClick={handleSend} className="text-blue-600 text-xs underline">Send Message</button>
            {!helpMode && (
              <button onClick={startHelpFlow} className="text-blue-500 text-xs underline">Need more help?</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
