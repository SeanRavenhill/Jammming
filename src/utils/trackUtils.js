

// Adds a track to the selected tracks and removes it from search results
export const addTrack = (trackId, searchResults, selectedTracks) => {
  const trackToAdd = searchResults.find((track) => track.id === trackId);

  if (trackToAdd) {
    const updatedSearchResults = searchResults.filter((track) => track.id !== trackId);
    const updatedSelectedTracks = [...selectedTracks, trackToAdd];

    return { updatedSearchResults, updatedSelectedTracks };
  };

  // Return the original state if the track is not found
  return { updatedSearchResults: searchResults, updatedSelectedTracks: selectedTracks };
};

// Removes a track from selected tracks, adds it back to search results, and reorders the results
export const removeTrack = (trackId, searchResults, selectedTracks, orderMap, reorderResults) => {
  const trackToRemove = selectedTracks.find((track) => track.id === trackId);

  if (trackToRemove) {
    const updatedSearchResults = [...searchResults, trackToRemove];
    const updatedSelectedTracks = selectedTracks.filter((track) => track.id !== trackId);
    
    // Reorder the search results using the orderMap
    const updatedOrderSearchResults = reorderResults(updatedSearchResults, orderMap);

    return { updatedSelectedTracks, updatedOrderSearchResults };
  }

  // Return the original state if the track is not found
  return { updatedSelectedTracks: selectedTracks, updatedOrderSearchResults: searchResults };
};