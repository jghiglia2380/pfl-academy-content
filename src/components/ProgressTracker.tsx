import { useEffect, useState } from "react";

export function ProgressTracker({ progress, standardId, chapters }) {
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    console.log(progress);
    if (progress) {
      const standardProgress = progress[standardId] || {};
      const completedChapters =
        Object.values(standardProgress).filter(Boolean).length;
      const totalChapters = chapters;
      const progressValue = (completedChapters / totalChapters) * 100;
      setProgressValue(progressValue);
    }
  }, [progress, standardId, chapters]);

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h4 className="text-sm font-medium text-gray-900 mb-2">Your Progress</h4>
      <div className="flex items-center">
        <div className="flex-grow">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${progressValue}%` }}
            />
          </div>
        </div>
        <span className="ml-2 text-sm text-gray-600">{progressValue}%</span>
      </div>
    </div>
  );
}
