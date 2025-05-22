let qaMap: Record<string, string> = {};

export async function loadChatbotData(): Promise<Record<string, string>> {
  const res = await fetch("/aboutus.txt");
  const text = await res.text();

  const lines = text.split("\n").map(line => line.trim()).filter(Boolean);

  const map: Record<string, string> = {};
  let currentQuestion = "";
  for (const line of lines) {
    if (line.endsWith("?")) {
      currentQuestion = line.toLowerCase();
    } else if (line.endsWith("..") && currentQuestion) {
      map[currentQuestion] = line.slice(0, -2).trim();
      currentQuestion = "";
    }
  }

  // Set the shared qaMap
  qaMap = map;
  console.log("Loaded Q&A:", map);
  return map;
}

export function getChatbotResponse(message: string): string {
  const lower = message.toLowerCase().trim();
  for (const question in qaMap) {
    if (lower.includes(question)) {
      return qaMap[question];
    }
  }
  return "__SHOW_CONTACT_FORM__";
}
