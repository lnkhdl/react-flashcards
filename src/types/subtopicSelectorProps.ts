export interface SubtopicSelectorProps {
  subtopics: string[];
  onChange: (selected: string[]) => void;
  onStart: () => void;
  onBack: () => void;
}