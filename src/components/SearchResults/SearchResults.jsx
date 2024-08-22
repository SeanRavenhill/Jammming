

// Import Components
import { Track } from '../Track/Track';

export const SearchResults = ({ searchResults, addTrack }) => {
  return (
    <div className='basis-1/2 p-4 bg-white rounded-md overflow-auto'>
      <div className='flex flex-col gap-4'>
        {/* Iterate over searchResults and render a Track component for each track */}
        {searchResults.map(track => (
          <Track
            key={track.id}            // Unique key for each Track component based on track ID
            id={track.id}             // Pass track ID as a prop to the Track component
            name={track.name}         // Pass track name as a prop to the Track component
            album={track.album}       // Pass album name as a prop to the Track component
            artist={track.artist}     // Pass artist name as a prop to the Track component
            image={track.image}       // Pass album artwork image URL as a prop to the Track component
            addTrack={addTrack}       // Pass addTrack function to handle adding the track to the playlist
          />
        ))}
      </div>
    </div>
  );
};
