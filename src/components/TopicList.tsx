import type { TopicListProps } from "../types/topicListProps";

export default function TopicList({ topics, onSelect }: TopicListProps) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Select a Topic
      </h1>

      <div className="grid gap-4 grid-cols-1">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => onSelect(topic)}
            className="bg-gray-900 text-white p-6 rounded-xl shadow hover:bg-gray-700 transition duration-200 text-center font-medium"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
