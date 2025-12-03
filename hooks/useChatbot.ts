import { useCallback, useMemo, useState } from "react";
import { sendPromptToChatbot } from "@/services/chatbotService";

type Message = { id: string; role: "user" | "assistant"; text: string };

export default function useChatbot() {
  const [messages, setMessages] = useState<Message[]>(() => [
    { id: "m-welcome", role: "assistant", text: "Hi! I\'m your Agritopia assistant. Ask me anything about your garden." },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0 && !sending, [input, sending]);

  const sendPrompt = useCallback(async () => {
    const prompt = input.trim();
    if (!prompt || sending) return;
    setSending(true);
    setInput("");
    const userMsg: Message = { id: `m-${Date.now()}`, role: "user", text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    try {
      const reply = await sendPromptToChatbot(prompt);
      const assistantMsg: Message = { id: `m-${Date.now()}-a`, role: "assistant", text: reply };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setSending(false);
    }
  }, [input, sending]);

  return { messages, input, setInput, sending, canSend, sendPrompt };
}

