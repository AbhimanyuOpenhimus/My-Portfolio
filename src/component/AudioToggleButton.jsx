import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './AudioToggleButton.css'; 
const AUDIO_SRC = '/krishna.mp3'; 

const AudioToggleButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        
        audioRef.current.play().catch(error => {
          console.error("Audio play failed:", error);
         
          setIsPlaying(false);
        });
        
      }
      
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

   
    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('playing', handlePlay); 
    audioElement.addEventListener('pause', handlePause);
    audioElement.addEventListener('ended', handlePause); 

    
    return () => {
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('playing', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
      audioElement.removeEventListener('ended', handlePause);
    };
  }, []); 

  return (
    <>
     
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />

      
      <button
        onClick={toggleAudio}
        className="audio-toggle-button"
        aria-label={isPlaying ? 'Mute background audio' : 'Play background audio'}
        title={isPlaying ? 'Mute background audio' : 'Play background audio'}
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  );
};

export default AudioToggleButton;