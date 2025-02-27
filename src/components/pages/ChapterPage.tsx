import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { standards } from "../../data/standards";
import { ChapterList } from "../ChapterList";
import { ChapterContent } from "../ChapterContent";
import { ChapterNavigation } from "../ChapterNavigation";
import { ProgressTracker } from "../ProgressTracker";
import { ToastContainer } from "react-toastify";
import { useProgress } from "../../hooks/useProgress";
import useUserStore from "../../stores/user";
import supabase from "../../utils/supabase";

export function ChapterPage() {
  const { standardId, chapterId } = useParams();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const standard = standards.find((s) => s.id === standardId);
  const chapter = standard?.chapters.find((c) => c.id === chapterId);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        useUserStore.getState().setUser(session.user);
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      if (window.location.pathname !== "/login") {
        localStorage.setItem("redirect", window.location.pathname);
        navigate("/login");
      }
    }
  }, [user, loading]);

  useEffect(() => {
    if (!standard || !chapter) {
      navigate("/standards");
    }
  }, [standard, chapter, navigate]);

  if (!standard || !chapter) {
    return null;
  }

  // Find the current standard index
  const currentStandardIndex = standards.findIndex((s) => s.id === standard.id);
  const { progress, updateProgress } = useProgress();

  // Determine the previous and next standards
  const previousStandard =
    currentStandardIndex > 0 ? standards[currentStandardIndex - 1] : null;
  const nextStandard =
    currentStandardIndex < standards.length - 1
      ? standards[currentStandardIndex + 1]
      : null;

  const currentChapterIndex = standard.chapters.findIndex(
    (c) => c.id === chapter.id
  );

  const handleNavigation = (newChapter: typeof chapter) => {
    if (!newChapter) {
      // Handle navigation when no next/previous chapter exists
      return;
    }

    const nextChapterIndex = standard.chapters.findIndex(
      (c) => c.id === newChapter.id
    );

    if (currentChapterIndex < nextChapterIndex) {
      updateProgress(standard.id, chapter.id);
    }

    navigate(`/standards/${standard.id}/chapters/${newChapter.id}`);
  };

  const handleChapterChange = (
    newChapter: typeof chapter,
    completed: boolean
  ) => {
    const nextUnlockableChapter = standard.chapters.find(
      (c) => !progress[standard.id]?.[c.id]
    );

    const isNextSequential =
      newChapter.id === standard.chapters[currentChapterIndex + 1]?.id;
    const isNextUnlockable = newChapter.id === nextUnlockableChapter?.id;

    if (!completed && (isNextSequential || isNextUnlockable)) {
      updateProgress(standard.id, chapter.id);
      navigate(`/standards/${standard.id}/chapters/${newChapter.id}`);
      return;
    }

    if (completed) {
      navigate(`/standards/${standard.id}/chapters/${newChapter.id}`);
    }
  };
  const handleNavigateToStandard = (standard, isPrevious: boolean = false) => {
    if (isPrevious) {
      const lastChapter = standard.chapters[standard.chapters.length - 1];
      navigate(`/standards/${standard.id}/chapters/${lastChapter.id}`);
    } else {
      //need to update the progress for the last chapter of the previous standard
      const lastChapter =
        standards[currentStandardIndex].chapters[
          standards[currentStandardIndex].chapters.length - 1
        ];

      const currentStandard = standards[currentStandardIndex];
      updateProgress(currentStandard.id, lastChapter.id);

      // Navigate to the first chapter of the next standard
      const firstChapter = standard.chapters[0];
      navigate(`/standards/${standard.id}/chapters/${firstChapter.id}`);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <div className="sticky top-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {standard.title}
          </h2>
          <p className="text-gray-600 mb-6">{standard.overview}</p>
          <ChapterList
            progress={progress}
            standardId={standard.id}
            chapters={standard.chapters}
            currentChapterId={chapter.id}
            onSelectChapter={handleChapterChange}
          />
          <ProgressTracker
            progress={progress}
            standardId={standard.id}
            chapters={standard.chapters.length}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-sm">
          <ChapterContent chapter={chapter} pathway="asynchronous" />

          <div className="px-8 pb-8">
            <ChapterNavigation
              standard={standard}
              currentChapter={chapter}
              onNavigate={handleNavigation}
              nextStandard={nextStandard}
              onContinueToNextStandard={(nextStandard) =>
                handleNavigateToStandard(nextStandard)
              }
              previousStandard={previousStandard}
              onNavigateToPreviousStandard={(prevStandard) =>
                handleNavigateToStandard(prevStandard, true)
              }
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
