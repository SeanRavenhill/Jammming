import { Track } from '../Track/Track';

export const SearchResults = ({ searchResults, addTrack }) => {
  const tracks = searchResults;

  return (
    <div className='basis-1/2 p-4 bg-white rounded-md overflow-auto'>
      <div className='flex flex-col gap-4'>
        {tracks.map(track => (
          <Track
            key={track.id}
            id={track.id}
            name={track.name}
            album={track.album}
            artist={track.artist}
            image={track.image}
            addTrack={addTrack}
          />
        ))}
      </div>
    </div>
  );
};
