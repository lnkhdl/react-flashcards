import { useEffect, useState } from "react";
import { loadFlashcards } from "./data/loadFlashcards";
import TopicList from "./components/TopicList";
import SubtopicSelector from "./components/SubtopicSelector";

export default function App() {
  const [cards, setCards] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState<"topics" | "subtopics">("topics");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      try {
        const { cards: loadedCards } = await loadFlashcards();
        setCards(loadedCards);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    run();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-800 text-lg">Loading...</p>
      </div>
    );
  }

  // Step 1: Show topics
  if (currentStep === "topics") {
    const uniqueTopics = Array.from(new Set(cards.map((c) => c.topic)));
    return (
      <TopicList
        topics={uniqueTopics}
        onSelect={(topic) => {
          setSelectedTopic(topic);
          setCurrentStep("subtopics");
        }}
      />
    );
  }

  // Step 2: Show subtopics for selected topic
  if (currentStep === "subtopics" && selectedTopic) {
    const subtopicsForTopic = cards
      .filter((c) => c.topic === selectedTopic)
      .map((c) => c.subtopic);
    const uniqueSubtopics = Array.from(new Set(subtopicsForTopic));

    return (
      <SubtopicSelector
        subtopics={uniqueSubtopics}
        onChange={(selected) => setSelectedSubtopics(selected)}
        onBack={() => setCurrentStep("topics")} // go back to topic selection
        onStart={() => {
          console.log("Selected Topic:", selectedTopic);
          console.log("Selected Subtopics:", selectedSubtopics);
          // TODO: move to flashcards view
        }}
      />
    );
  }

  return null;
}
