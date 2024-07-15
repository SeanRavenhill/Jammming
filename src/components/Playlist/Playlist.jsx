import { useState } from 'react';
import { SearchResults } from '../SearchResults/SearchResults';
import { Tracklist } from '../Tracklist/Tracklist';
import { addTrack, removeTrack } from '../../utils/trackUtils';
import { savePlaylist } from '../../utils/buttonUtils';

import { dummyResults } from '../../data/dataset';

export const Playlist = () => {
  const [searchResults, setSearchResults] = useState(dummyResults);
  const [selectedTracks, setSelectedTracks] = useState([]);

  const handleAddTrack = trackId => {
    addTrack(trackId, searchResults, setSearchResults, setSelectedTracks);
  };

  const handleRemoveTrack = trackId => {
    removeTrack(
      trackId,
      setSearchResults,
      selectedTracks,
      setSelectedTracks,
      dummyResults
    );
  };

  const handleSavePlaylist = () => {
    savePlaylist();
  };

  return (
    <div className='relative flex-1 container mx-auto'>
      <div className='absolute inset-0 flex flex-col m-4 gap-4 mb-4'>
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
