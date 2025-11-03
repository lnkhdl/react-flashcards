import { useEffect, useState } from "react";
import { loadFlashcards } from "./data/loadFlashcards";
import TopicList from "./components/TopicList";

export default function App() {
  const [topics, setTopics] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      try {
        const { cards } = await loadFlashcards();
        // Extract unique topics
        const uniqueTopics = Array.from(new Set(cards.map((c) => c.topic)));
        setTopics(uniqueTopics);
      } catch (err) {
        console.error("Error loading flashcards:", err);
      } finally {
        setLoading(false);
      }
    }
    run();
  }, []);

  const handleSelectTopic = (topic: string) => {
    console.log("Selected topic:", topic);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-800 text-lg">Loading topics...</p>
      </div>
    );
  }

  return <TopicList topics={topics} onSelect={handleSelectTopic} />;
}
