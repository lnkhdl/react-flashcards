import React, { useEffect } from "react";
import { loadFlashcards } from "./data/loadFlashcards";

export default function App() {
  useEffect(() => {
    async function run() {
      try {
        const { raw, cards } = await loadFlashcards();

        // Console log a short preview of the raw markdown (first 300 chars)
        console.log("flashcards.md raw preview:", raw.slice(0, 300));

        // Console log the total number of parsed cards
        console.log("parsed cards count:", cards.length);

        // Console log the first parsed card (if exists)
        if (cards.length > 0) {
          console.log("first card:", cards[0]);
        } else {
          console.log("no cards parsed (cards.length === 0)");
        }
      } catch (err) {
        console.error("Error loading flashcards:", err);
      }
    }

    run();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-slate-900">Check the console for loader output</h1>
    </div>
  );
}
