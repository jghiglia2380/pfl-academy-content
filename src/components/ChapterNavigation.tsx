import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Standard, Chapter } from "../types";

interface ChapterNavigationProps {
  standard: Standard;
  currentChapter: Chapter;
  onNavigate: (chapter: Chapter) => void;
  nextStandard?: Standard | null;
  onContinueToNextStandard: (standard: Standard) => void;
  previousStandard?: Standard | null; // New prop
  onNavigateToPreviousStandard: (standard: Standard) => void; // New handler
}

export function ChapterNavigation({
  standard,
  currentChapter,
  onNavigate,
  nextStandard,
  onContinueToNextStandard,
  previousStandard,
  onNavigateToPreviousStandard,
}: ChapterNavigationProps) {
  const currentIndex = standard.chapters.findIndex(
    (ch) => ch.id === currentChapter.id
  );
  const prevChapter =
    currentIndex > 0 ? standard.chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < standard.chapters.length - 1
      ? standard.chapters[currentIndex + 1]
      : null;

  return (
    <div className="flex justify-between items-center mt-8 border-t border-gray-200 pt-6">
      {prevChapter ? (
        <button
          onClick={() => onNavigate(prevChapter)}
          className="flex items-center bg-indigo-600 text-sm text-white px-2 py-2 rounded-lg hover:bg-indigo-700"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Previous: {prevChapter.title}</span>
        </button>
      ) : previousStandard ? (
        <button
          onClick={() => onNavigateToPreviousStandard(previousStandard)}
          className="flex items-center bg-indigo-600 text-sm text-white px-2 py-2 rounded-lg hover:bg-indigo-700"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Previous: {previousStandard.title}</span>
        </button>
      ) : (
        <div />
      )}

      {nextChapter ? (
        <button
          onClick={() => onNavigate(nextChapter)}
          className="flex items-center bg-indigo-600 text-sm text-white px-2 py-2 rounded-lg hover:bg-indigo-700"
        >
          <span>Next: {nextChapter.title}</span>
          <ChevronRight className="h-5 w-5 ml-1" />
        </button>
      ) : nextStandard ? (
        <button
          onClick={() => onContinueToNextStandard(nextStandard)}
          className="flex items-center bg-indigo-600 text-sm text-white px-2 py-2 rounded-lg hover:bg-indigo-700"
        >
          <span>Next: {nextStandard.title}</span>
          <ChevronRight className="h-5 w-5 ml-1" />
        </button>
      ) : (
        <div />
      )}
      {nextStandard === null && nextChapter === null ? (
        <div className="">
          <button
            className="px-6 py-3 bg-indigo-600 text-sm text-white rounded-lg hover:bg-indigo-700"
            onClick={() => alert("Course Completed!")}
          >
            Complete Course
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
