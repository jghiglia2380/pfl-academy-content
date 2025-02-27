import { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import useUserStore from "../stores/user";

export function useProgress() {
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user) return;
    const fetchProgress = async () => {
      const { data, error } = await supabase
        .from("progress")
        .select("progress_json")
        .eq("user_id", user.id)
        .single();
      if (error && error.code !== "PGRST116") console.error(error.message);
      if (data) setProgress(data.progress_json);
      setLoading(false);
    };
    if(user?.id) fetchProgress();
  }, [user?.id]);

  const updateProgress = async (standardId, chapterId) => {
    if (!user) return;
    const newProgress = {
      ...progress,
      [standardId]: { ...(progress[standardId] || {}), [chapterId]: true },
    };

    if (JSON.stringify(progress) === JSON.stringify(newProgress)) return;

    const { error } = await supabase
      .from("progress")
      .upsert(
        { user_id: user.id, progress_json: newProgress },
        { onConflict: ["user_id"] }
      );
    if (error) console.error("Update error:", error.message);

    setProgress((prev) => ({
      ...prev,
      [standardId]: { ...(prev[standardId] || {}), [chapterId]: true },
    }));

    console.log("Progress updated!, ", newProgress);
  };

  return { progress, loading, updateProgress };
}
