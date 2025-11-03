import type { Flashcard } from "./flashcard";

export interface FlashcardViewProps {
  flashcards: Flashcard[];
  onBack: () => void;
}