import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';

interface AudioPlayerProps {
  title: string;
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <audio ref={audioRef} src={audioUrl} />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isMuted ? (
            <VolumeX className="h-6 w-6" />
          ) : (
            <Volume2 className="h-6 w-6" />
          )}
        </button>

        <div className="flex-1">
          <Slider.Root
            className="relative flex items-center select-none touch-none h-5"
            defaultValue={[1]}
            max={1}
            step={0.1}
            value={[volume]}
            onValueChange={handleVolumeChange}
          >
            <Slider.Track className="bg-gray-200 dark:bg-gray-700 relative grow rounded-full h-1">
              <Slider.Range className="absolute bg-rose-500 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-4 h-4 bg-white border-2 border-rose-500 rounded-full hover:bg-rose-50 focus:outline-none"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;