import type { Flashcard } from "../types/flashcard";
import { parseMarkdown} from "../utils/parseMarkdown";

export async function loadFlashcards(): Promise<{ raw: string; cards: Flashcard[] }> {
  const res = await fetch(`${import.meta.env.BASE_URL}data/flashcards.md`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to load flashcards.md - ${res.status} ${res.statusText}`);
  }
  const raw = await res.text();
  const cards = parseMarkdown(raw);
  return { raw, cards };
}
