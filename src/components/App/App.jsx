

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
  // State for managing search results, selected tracks, and their order
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [orderMap, setOrderMap] = useState({});

  // Fetch Spotify access token when the component mounts
  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  // Handle search requests and update search results and order map
  const handleSearch = (term) => {
    Spotify.search(term).then(results => {
      setSearchResults(results);
      setOrderMap(generateOrderMap(results));
    });
  };

  // Add a track to the selected tracks list and update the search results
  const handleAddTrack = useCallback( trackId => {
    const { updatedSelectedTracks, updatedSearchResults } = addTrack(trackId, searchResults, selectedTracks);
    setSelectedTracks(updatedSelectedTracks);
    setSearchResults(updatedSearchResults);
  }, [searchResults, selectedTracks]);

  // Remove a track from the selected tracks list and update the search results and order map
  const handleRemoveTrack = useCallback( trackId => { 
    const { updatedSelectedTracks, updatedOrderSearchResults } = removeTrack(trackId, searchResults, selectedTracks, orderMap, reorderResults);
    setSelectedTracks(updatedSelectedTracks);
    setSearchResults(updatedOrderSearchResults);
  }, [searchResults, selectedTracks]);

  // Save the current playlist with the selected tracks to Spotify
  const handleSavePlaylist = (playlistTitle) => {
    Spotify.savePlaylist(playlistTitle, selectedTracks)
  };

  return (
    <div className='absolute inset-0 flex flex-col'>
      <main className='relative flex-1 flex bg-cover bg-center bg-blend-luminosity bg-purple-200'>
        <div className='relative flex-1 flex flex-col'>
          {/* SearchBar component to handle search input and trigger search */}
          <SearchBar handleSearch={handleSearch} />

           {/* Playlist component to display search results, selected tracks, and handle track management */}
          <Playlist 
            searchResults={searchResults}           // Pass searchResults object as prop
            selectedTracks={selectedTracks}         // Pass selectedTracks object as a prop
            handleAddTrack={handleAddTrack}         // Pass handleAddTrack function as a prop
            handleRemoveTrack={handleRemoveTrack}   // Pass handleRemoveTrack function as a prop
            savePlaylist={handleSavePlaylist}       // Pass savePlaylist function as a prop
          />
        </div>
      </main>
    </div>
  );
};