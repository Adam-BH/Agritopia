export async function sendPromptToChatbot(prompt: string): Promise<string> {
  const trimmed = prompt.trim();
  const hint = trimmed.length > 60 ? trimmed.slice(0, 60) + "…" : trimmed;
  await new Promise((r) => setTimeout(r, 600));
  return `You asked: "${hint}". Here\'s a tip: Keep pH stable, monitor EC, and ensure good aeration for healthy roots.`;
}

