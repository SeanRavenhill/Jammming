export const addTrack = (trackId, searchResults, setSearchResults, setSelectedTracks) => {
  const trackToAdd = searchResults.find((track) => track.id === trackId);
  if (trackToAdd) {
    setSelectedTracks((prevTracks) => [...prevTracks, trackToAdd]);
    setSearchResults((prevTracks) => prevTracks.filter((track) => track.id !== trackId));
  }
};

export const removeTrack = (trackId, setSearchResults, selectedTracks, setSelectedTracks, dummyResults) => {
  const trackToRemove = selectedTracks.find((track) => track.id === trackId);
  if (trackToRemove) {
    setSearchResults((prevTracks) => {
      const updatedTracks = [...prevTracks, trackToRemove];
      // Sort the updated tracks based on the original dummyResults order
      return updatedTracks.sort((a, b) => {
        const indexA = dummyResults.findIndex((track) => track.id === a.id);
        const indexB = dummyResults.findIndex((track) => track.id === b.id);
        return indexA - indexB;
      });
    });
    setSelectedTracks((prevTracks) => prevTracks.filter((track) => track.id !== trackId));
  }
};