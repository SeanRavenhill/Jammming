

// Import React Hooks
import { useRef, useEffect } from 'react';

export const Track = ({ name, album, artist, image, id, preview, addTrack, removeTrack, currentPlayingTrackId, handlePlayPreview }) => {

  // Create a ref to the audio element
  const audioRef = useRef(null);

  // Determine if this track is currently playing
  const isPlaying = currentPlayingTrackId === id

  // Handles the click event to either add or remove a track
  const handleAddRemoveTrack = () => {
    addTrack ? addTrack(id) : removeTrack(id); // If addTrack is provided, call it; otherwise, call removeTrack
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.play().catch(error => {
        console.error("Error playing audio", error);
        handlePlayPreview(null);  // Stop playback if there's an error
      });
    } else {
      audioElement.pause();
    }

    return () => {
      audioElement.pause();  // Cleanup when the component unmounts or isPlaying changes
    };
  }, [isPlaying, handlePlayPreview]);


  return (
    <div className={`flex justify-between items-center p-3 border rounded-md ${isPlaying ? `bg-blue-100` : `bg-white`}`}>
      
      <div className="flex gap-4 h-full">
        {/* Display the album artwork */}
        <div
          className='w-16 h-16 bg-cover bg-center'
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Display track details: name, album, artist */}
        <div className="flex flex-col justify-between">
          <p className="~text-sm/base al">{name}</p>
          <p className="~text-sm/base">{album}</p>
          <p className="~text-sm/base">{artist}</p>  
        </div>

        {/* Play and pause buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => handlePlayPreview(id)}
            disabled={!preview}
          >
            {preview ? (isPlaying ? `⏸️` : `▶️`) : `🚫`}
          </button>
        </div>
      </div>

      {/* Hidden audio element controlled programmatically */}
      <audio
        ref={audioRef}
        src={preview}
        type="audio/mpeg"
        onError={() => {
          console.error("Error loading audio");
          handlePlayPreview(null);  // Reset playback state in case of an error
        }}
      >
      </audio>

      
      {/* Button to add or remove a track, depending on the context */}
      <button className='justify-self-end' onClick={handleAddRemoveTrack}>
        {addTrack ? `➕` : `➖`} {/* Show ➕ if adding, ➖ if removing */}
      </button>

    </div>
  );
};
