import React, { useEffect, useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

export function ChapterList({
  progress,
  standardId,
  chapters,
  currentChapterId,
  onSelectChapter,
}) {
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [nextUnlockableChapterId, setNextUnlockableChapterId] = useState<
    string | null
  >(null);
  const [nextSequentialChapterId, setNextSequentialChapterId] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (progress) {
      const standardProgress = progress[standardId] || {};
      const completedChapters = Object.keys(standardProgress).filter(
        (key) => standardProgress[key]
      );
      setCompletedChapters(completedChapters);
    }
  }, [progress, standardId, chapters]);

  useEffect(() => {
    // Find the first uncompleted chapter after all completed ones
    const firstUncompletedChapter = chapters.find(
      (chapter) => !completedChapters.includes(chapter.id)
    );
    setNextUnlockableChapterId(
      firstUncompletedChapter ? firstUncompletedChapter.id : null
    );
  }, [chapters, completedChapters]);

  useEffect(() => {
    // Find the next sequential chapter from the current chapter
    const currentIndex = chapters.findIndex(
      (chapter) => chapter.id === currentChapterId
    );
    const nextChapter = chapters[currentIndex + 1];
    setNextSequentialChapterId(nextChapter ? nextChapter.id : null);
  }, [chapters, currentChapterId]);

  return (
    <nav className="space-y-2" aria-label="Chapters">
      {chapters.map((chapter) => {
        const isCurrent = chapter.id === currentChapterId;
        const isCompleted = completedChapters.includes(chapter.id);
        const isNextSequential = chapter.id === nextSequentialChapterId;
        const isNextUnlockable = chapter.id === nextUnlockableChapterId;

        // Allow clicks only for completed chapters, the next sequential chapter, or the first uncompleted one
        const isClickable = isCompleted || isNextSequential || isNextUnlockable;

        return (
          <button
            key={chapter.id}
            disabled={isCurrent || !isClickable}
            onClick={() => onSelectChapter(chapter, isCompleted)}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors 
               ${
                 isCurrent
                   ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700"
                   : "text-gray-600"
               }
               ${isCompleted ? "bg-green-50 text-green-700" : ""}
               ${
                 isClickable
                   ? "hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                   : "cursor-auto"
               }
              `}
          >
            <span className="mr-3">
              {isCompleted ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
            </span>
            <span className="text-left">{chapter.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
