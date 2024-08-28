

// Import React Hooks
import { useState, useCallback } from 'react';

// Import Components
import { SearchResults } from '../SearchResults/SearchResults';
import { Tracklist } from '../Tracklist/Tracklist';

export const Playlist = ({searchResults, selectedTracks, handleAddTrack, handleRemoveTrack, savePlaylist}) => {
  // State to keep track of the currently playing track ID
  const [currentPlayingTrackId, setCurrentPlayingTrackId] = useState(null);

  // Function to handle play/pause logic for track previews
  const handlePlayPreview = useCallback((trackId) => {
    // If the same track is clicked again, stop the playback; otherwise, play the new track
    trackId === currentPlayingTrackId ? setCurrentPlayingTrackId(null) : setCurrentPlayingTrackId(trackId);
  }, [currentPlayingTrackId]);
  
  // Wrapper function to handle saving the playlist with the provided title
  const handleSavePlaylist = (playlistTitle) => {
    savePlaylist(playlistTitle); // Calls the savePlaylist function passed as a prop
  };

  return (
    <div className='relative flex-1 container mx-auto'>
      <div className='absolute inset-0 flex flex-col m-4 gap-4'>
        {/* Displays search results and allows tracks to be added */}
        <SearchResults
          searchResults={searchResults}                   // Passes the search results tracks to the SearchResults
          addTrack={handleAddTrack}                       // Passes the addTrack function to handle adding tracks
          currentPlayingTrackId={currentPlayingTrackId}   // Passes ID of currently playing track
          handlePlayPreview={handlePlayPreview}           // Passes Function to handle track preview playback
        />
        <Tracklist
          tracks={selectedTracks}                         // Passes the selected tracks to the Tracklist
          removeTrack={handleRemoveTrack}                 // Passes the removeTrack function to handle track removal
          savePlaylist={handleSavePlaylist}               // Passes the savePlaylist handler to save the playlist
          currentPlayingTrackId={currentPlayingTrackId}   // Passes ID of currently playing track
          handlePlayPreview={handlePlayPreview}           // Passes Function to handle track preview playback
        />
      </div>
    </div>
  );
};
