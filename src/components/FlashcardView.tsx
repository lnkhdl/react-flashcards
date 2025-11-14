import { useState } from "react";
import type { FlashcardViewProps } from "../types/flashcardViewProps";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export default function FlashcardView({ flashcards, onBack }: FlashcardViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1 < flashcards.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-800 text-lg mb-4">No flashcards available.</p>
        <button
          onClick={onBack}
          className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-gray-700 transition duration-200 font-medium"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto flex flex-col gap-6">
      <h2 className="text-xl font-bold text-gray-900 text-center">
        {currentCard.topic} - {currentCard.subtopic}
      </h2>

      <div className="bg-gray-100 p-6 rounded-xl shadow min-h-[150px]">
        <p className="text-gray-900 font-medium">{currentCard.question}</p>

        {showAnswer && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg text-gray-800">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {currentCard.answer}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {/* Navigation buttons (row 1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">
        {/* Left: Previous (left on md+) */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-full md:w-auto px-6 py-3 rounded-xl shadow font-medium transition duration-200 justify-self-start ${
            currentIndex === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          Previous
        </button>

        {/* Center: Show/Hide Answer (center on md+) */}
        <button
          onClick={() => setShowAnswer((prev) => !prev)}
          className="w-full md:w-auto px-6 py-3 rounded-xl shadow bg-gray-900 text-white hover:bg-gray-700 transition duration-200 font-medium justify-self-center"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        {/* Right: Next (right on md+) */}
        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          className={`w-full md:w-auto px-6 py-3 rounded-xl shadow font-medium transition duration-200 justify-self-end ${
            currentIndex === flashcards.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          Next
        </button>
      </div>

      {/* Counter centered (row 2) */}
      {/* 3-col grid on md to ensure the counter is exactly under the center column */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-2">
        <div /> {/* empty left column on md */}
        <div className="text-center text-gray-700 justify-self-center">
          {currentIndex + 1} / {flashcards.length}
        </div>
        <div /> {/* empty right column on md */}
      </div>

      {/* Back to Subtopics centered (row 3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-2">
        <div /> {/* empty left */}
        <div className="flex justify-center">
          <button
            onClick={onBack}
            className="w-full md:w-auto bg-gray-300 text-gray-900 px-6 py-3 rounded-xl shadow hover:bg-gray-400 transition duration-200 font-medium"
          >
            Back to Subtopics
          </button>
        </div>
        <div /> {/* empty right */}
      </div>
    </div>
  );
}
