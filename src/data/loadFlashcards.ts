import { parseMarkdown} from "../utils/parseMarkdown";

export async function loadFlashcards() {
  // 1) Load index.json
  const indexRes = await fetch(`${import.meta.env.BASE_URL}data/index.json`, { cache: "no-store" });

  if (!indexRes.ok) {
    throw new Error(`Failed to load index.json: ${indexRes.status} ${indexRes.statusText}`);
  }

  const { filenames } = await indexRes.json();

  const allCards: any[] = [];

  // 2) Load each markdown file listed in index.json
  for (const name of filenames) {
    const res = await fetch(`${import.meta.env.BASE_URL}data/${name}.md`, { cache: "no-store" });

    if (!res.ok) {
      console.warn(`Could not load ${name}.md`);
      continue;
    }

    const raw = await res.text();

    // 3) Convert Markdown to Flashcards[]
    const parsedCards = parseMarkdown(raw);

    // 4) Append to the global list
    allCards.push(...parsedCards);
  }

  return allCards;
}
