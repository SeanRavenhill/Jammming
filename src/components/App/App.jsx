// Import React Hooks
import { useState, useEffect, useCallback } from 'react';

// Import Components
import { SearchBar } from '../SearchBar/SearchBar';
import { Playlist } from '../Playlist/Playlist';

// Import Utility Functions
import { Spotify } from '../../utils/Spotify';
import { generateOrderMap, reorderResults } from '../../utils/ListUtils';
import { addTrack, removeTrack } from '../../utils/TrackUtils';

export const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [orderMap, setOrderMap] = useState({});

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const handleSearch = (term) => {
    Spotify.search(term).then(results => {
      setSearchResults(results);
      setOrderMap(generateOrderMap(results));
    });
  };

  const handleAddTrack = useCallback( trackId => {
    const { updatedSelectedTracks, updatedSearchResults } = addTrack(trackId, searchResults, selectedTracks);
    setSelectedTracks(updatedSelectedTracks);
    setSearchResults(updatedSearchResults);
  }, [searchResults, selectedTracks]);

  const handleRemoveTrack = useCallback( trackId => { 
    const { updatedSelectedTracks, updatedOrderSearchResults } = removeTrack(trackId, searchResults, selectedTracks, orderMap, reorderResults);
    setSelectedTracks(updatedSelectedTracks);
    setSearchResults(updatedOrderSearchResults);
  }, [searchResults, selectedTracks]);

  const handleSavePlaylist = (playlistTitle) => {
    Spotify.savePlaylist(playlistTitle, selectedTracks)
  };

  return (
    <div className='absolute inset-0 flex flex-col'>
      <main className='relative flex-1 flex bg-cover bg-center bg-blend-luminosity bg-purple-200'>
        <div className='relative flex-1 flex flex-col'>
          <SearchBar handleSearch={handleSearch} />
          <Playlist 
            searchResults={searchResults}
            orderMap={orderMap}
            selectedTracks={selectedTracks} // Pass selectedTracks as a prop
            handleAddTrack={handleAddTrack} // Pass handleAddTrack as a prop
            handleRemoveTrack={handleRemoveTrack} // Pass handleRemoveTrack as a prop
            savePlaylist={handleSavePlaylist}
          />
        </div>
      </main>
    </div>
  );
};