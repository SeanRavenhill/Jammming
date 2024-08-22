

// Import React Hooks
import { useState } from 'react';

// Import Components
import { Track } from '../Track/Track';
import { Button } from '../Button/Button';

export const Tracklist = ({ tracks, removeTrack, savePlaylist }) => {
  // State to keep track of the playlist title input by the user
  const [playlistTitle, setplaylistTitle] = useState('');
  
  // Handles input changes and updates the playlist title state
  const handleInputChange = (e) => {
    setplaylistTitle(e.target.value);
  };

  // Handles the click event to save the playlist with the current title
  const handleClick = (e) => {
    e.preventDefault();           // Prevents the default form submission behavior
    savePlaylist(playlistTitle);  // Calls the savePlaylist function with the playlist title
    setplaylistTitle('');         // Clears the input after processing
  };

  return (
    <div className='basis-1/2 flex flex-col  bg-white rounded-md overflow-auto'>

      {/* Input field for the playlist title and the save button */}
      <div className='flex justify-between gap-4 m-4'>
        <input
          id='playListTitle'
          name='playListTitle'
          placeholder='Playlist Title'
          value={playlistTitle}
          onChange={handleInputChange}
          className='px-2 rounded border flex-grow'
        />
        {/* Button to save the playlist */}
        <Button buttonText={'Save'} handleClick={handleClick} />
      </div>
      
      {/* List of tracks to display in the playlist */}
      <div className='flex flex-col gap-4 flex-1 overflow-auto px-4'>
        {tracks.map(track => (
          <Track
            key={track.id}             // Unique key for each Track component based on track ID
            id={track.id}              // Pass track ID as a prop to the Track component
            name={track.name}          // Pass track name as a prop to the Track component
            album={track.album}        // Pass album name as a prop to the Track component
            artist={track.artist}      // Pass artist name as a prop to the Track component
            image={track.image}        // Pass album artwork image URL as a prop to the Track component
            removeTrack={removeTrack}  // Pass removeTrack function to handle removing the track
          />
        ))}
      </div>

    </div>
  );
};