import { useRef, useState, useEffect } from 'react';

export const Track = ({ name, album, artist, image, id, preview, addTrack, removeTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Create a ref to the audio element
  const audioRef = useRef(null);

  // Handles the click event to either add or remove a track
  const handleAddRemoveTrack = () => {
    addTrack ? addTrack(id) : removeTrack(id); // If addTrack is provided, call it; otherwise, call removeTrack
  };

  // Function to play the audio
  const togglePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    
    return () => {
      audioElement.pause();  // Cleanup when the component unmounts or isPlaying changes
    };
  }, [isPlaying]);


  return (
    <div className='flex justify-between items-center p-3 border rounded-md'>
      
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
          <button onClick={togglePlayPause}>
            {isPlaying ? `⏸️` : `▶️`} {/* Show ▶️ is not playing, ⏸️ if playing */}
          </button>
        </div>
      </div>

      {/* Hidden audio element controlled programmatically */}
      <audio
        ref={audioRef}
        src={preview}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        type="audio/mpeg"
      >
      </audio>

      
      {/* Button to add or remove a track, depending on the context */}
      <button className='justify-self-end' onClick={handleAddRemoveTrack}>
        {addTrack ? `➕` : `➖`} {/* Show ➕ if adding, ➖ if removing */}
      </button>

    </div>
  );
};
