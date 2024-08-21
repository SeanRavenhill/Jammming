export const addTrack = (trackId, searchResults, selectedTracks) => {

  const trackToAdd = searchResults.find((track) => track.id === trackId);

  if (trackToAdd) {
    const updatedSearchResults = searchResults.filter((track) => track.id !== trackId);
    const updatedSelectedTracks = [...selectedTracks, trackToAdd];

    return { updatedSearchResults, updatedSelectedTracks };
  };

  return { updatedSearchResults: searchResults, updatedSelectedTracks: selectedTracks };
};

export const removeTrack = (trackId, searchResults, selectedTracks, orderMap, reorderResults) => {
  const trackToRemove = selectedTracks.find((track) => track.id === trackId);

  if (trackToRemove) {
    const updatedSearchResults = [...searchResults, trackToRemove];
    const updatedSelectedTracks = selectedTracks.filter((track) => track.id !== trackId);
    
    const updatedOrderSearchResults = reorderResults(updatedSearchResults, orderMap);

    return { updatedSelectedTracks, updatedOrderSearchResults };
  }

  return { updatedSelectedTracks: selectedTracks, updatedOrderSearchResults: searchResults };
};