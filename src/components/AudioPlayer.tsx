import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  FastForward,
  Rewind,
  Headphones,
  Volume2,
} from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
}

export function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume (1 is 100%)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  useEffect(() => {
    setIsPlaying(false);
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 10,
      0
    );
  };

  const handleFastForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 10,
      duration
    );
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center text-indigo-600 mb-2">
        <Headphones className="h-4 w-4 mr-1" />
        <span className="text-sm font-medium">Listen to Chapter</span>
      </div>

      <div className="inline-flex items-center space-x-2 bg-white rounded-lg shadow-sm border border-gray-200 p-2">
        <audio ref={audioRef} src={audioUrl} />

        <button
          onClick={handleRewind}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Rewind 10 seconds"
        >
          <Rewind className="h-4 w-4 text-gray-700" />
        </button>

        <button
          onClick={togglePlay}
          className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>

        <button
          onClick={handleFastForward}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Fast forward 10 seconds"
        >
          <FastForward className="h-4 w-4 text-gray-700" />
        </button>

        <span className="text-sm text-gray-500 min-w-[90px]">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <div className="relative">
          <button
            onClick={toggleVolumeSlider}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Volume"
          >
            <Volume2 className="h-4 w-4 text-gray-700" />
          </button>
          {showVolumeSlider && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg p-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
