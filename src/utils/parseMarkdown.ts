import type { Flashcard } from "../types/flashcard";

export function parseMarkdown(markdown: string): Flashcard[] {
  const sections = markdown.split(/^## /m).slice(1);
  return sections.map(section => {
    const [header, ...rest] = section.trim().split("\n");
    const [topic, subtopic] = header.split("/").map(s => s.trim());
    const body = rest.join("\n");
    const qMatch = body.match(/\*\*Q:\*\*(.*?)(?=\*\*A:\*\*)/s);
    const aMatch = body.match(/\*\*A:\*\*(.*)/s);
    return {
      topic,
      subtopic,
      question: qMatch ? qMatch[1].trim() : "",
      answer: aMatch ? aMatch[1].trim() : "",
    };
  });
}