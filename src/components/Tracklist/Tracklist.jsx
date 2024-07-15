import { Track } from '../Track/Track';
import { Button } from '../Button/Button';

export const Tracklist = ({ tracks, removeTrack, savePlaylist }) => {
  return (
    <div className='flex flex-col gap-4 basis-1/2 p-4 bg-white rounded-md'>
      <div className='flex justify-between gap-4'>
        <input
          id='playListTitle'
          name='playListTitle'
          placeholder='Playlist Title'
          className='p-2 rounded border flex-grow'
        />
        <Button savePlaylist={savePlaylist} />
      </div>
      
      <div className='flex flex-col gap-4 flex-1 overflow-auto'>
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
