import { useState } from "react";
import type { SubtopicSelectorProps } from "../types/subtopicSelectorProps";

export default function SubtopicSelector({
  subtopics,
  onChange,
  onStart,
  onBack,
}: SubtopicSelectorProps) {
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);

  const handleToggle = (subtopic: string) => {
    let updated: string[];
    if (selectedSubtopics.includes(subtopic)) {
      updated = selectedSubtopics.filter((s) => s !== subtopic);
    } else {
      updated = [...selectedSubtopics, subtopic];
    }
    setSelectedSubtopics(updated);
    onChange(updated);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Select Subtopics
      </h1>

      <div className="flex flex-col gap-4">
        {subtopics.map((subtopic) => (
          <label
            key={subtopic}
            className="flex items-center bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition duration-200 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedSubtopics.includes(subtopic)}
              onChange={() => handleToggle(subtopic)}
              className="mr-4 w-5 h-5 accent-gray-900"
            />
            <span className="text-gray-900 font-medium">{subtopic}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-900 px-6 py-3 rounded-xl shadow hover:bg-gray-400 transition duration-200 font-medium"
        >
          Back
        </button>

        <button
          onClick={onStart}
          className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-gray-700 transition duration-200 font-medium"
        >
          Start
        </button>
      </div>
    </div>
  );
}
