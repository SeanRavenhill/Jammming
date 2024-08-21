import { useState } from 'react';

import { Track } from '../Track/Track';
import { Button } from '../Button/Button';


export const Tracklist = ({ tracks, removeTrack, savePlaylist }) => {
  const [playlistTitle, setplaylistTitle] = useState('');
  
  const handleInputChange = (e) => {
    setplaylistTitle(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    savePlaylist(playlistTitle);
    setplaylistTitle(''); // Clears the input after processing
  };

  return (
    <div className='basis-1/2 flex flex-col  bg-white rounded-md overflow-auto'>

      <div className='flex justify-between gap-4 m-4'>
        <input
          id='playListTitle'
          name='playListTitle'
          placeholder='Playlist Title'
          value={playlistTitle}
          onChange={handleInputChange}
          className='px-2 rounded border flex-grow'
        />
        <Button buttonText={'Save'} handleClick={handleClick} />
      </div>
      
      <div className='flex flex-col gap-4 flex-1 overflow-auto px-4'>
        {tracks.map(track => (
          <Track
            key={track.id}
            id={track.id}
            name={track.name}
            album={track.album}
            artist={track.artist}
            image={track.image}
            removeTrack={removeTrack}
          />
        ))}
      </div>

    </div>
  );
};