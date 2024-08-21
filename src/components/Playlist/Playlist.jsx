// Import Components
import { SearchResults } from '../SearchResults/SearchResults';
import { Tracklist } from '../Tracklist/Tracklist';

export const Playlist = ({searchResults, selectedTracks, handleAddTrack, handleRemoveTrack, savePlaylist}) => {
  
  const handleSavePlaylist = (playlistTitle) => {
    savePlaylist(playlistTitle);
  };

  return (
    <div className='relative flex-1 container mx-auto'>
      <div className='absolute inset-0 flex flex-col m-4 gap-4'>
        <SearchResults
          searchResults={searchResults}
          addTrack={handleAddTrack}
        />
        <Tracklist
          tracks={selectedTracks}
          removeTrack={handleRemoveTrack}
          savePlaylist={handleSavePlaylist}
        />
      </div>
    </div>
  );
};
