# **Technical Design Document: Preview Track Feature**

**Date:** 20 August 2024 | 20/08/2024
**Project:** Jammming App  
**Feature:** Preview Track

---

### **OBJECTIVE**

To implement a feature that allows users to preview tracks before adding them to a playlist in the Jammming app.

### **BACKGROUND**

Currently, the Jammming app supports searching for tracks and adding them to a playlist, which can then be saved to Spotify. However, users do not have the ability to preview tracks before deciding to add them to a playlist. With the addition of this feature, users will be able to listen to a 30-second preview of any track directly within the app, enhancing the user experience and allowing for more informed decisions when creating playlists.

This feature will:
- Allow users to preview a track by clicking a "Preview" button next to each track in the search results.
- Play a 30-second audio clip provided by Spotify's API.
- Display basic controls (play/pause) for the preview.

### **TECHNICAL DESIGN**

#### **Retrieve and Play Preview Track**

1. **Component Updates**:
   - **Track Component**: The existing `Track` component will be updated to include a "Preview" button.
   - **Audio Controls**: A new sub-component `AudioControls` will be created to manage the play/pause functionality.

2. **State Management**:
   - **App State**: The App component will be updated to store the current track being previewed and its playback status (playing/paused).
   - **Track State**: Each track will maintain its own preview state to ensure only one track plays at a time.

3. **API Integration**:
   - **Spotify API**: Use Spotify’s track preview URL, available from the search results, to play the 30-second preview. This URL will be retrieved from the track data provided by the Spotify search API.

4. **Method Creation**:
   - **Spotify.getTrackPreview(id)**: This method will be added to the Spotify.js module. It will retrieve the preview URL from the track data and return it to the calling component.
   - **App.playPreview(trackId)**: A new method in App.js to handle preview playback. It will:
     1. Stop any currently playing preview.
     2. Update state with the new track's preview URL.
     3. Trigger playback of the new preview.

   - **App.pausePreview()**: This method will pause the currently playing preview and update the state accordingly.

5. **UI/UX Considerations**:
   - **Play/Pause Button**: The "Preview" button should toggle to "Pause" when a preview is playing.
   - **Track Indication**: Highlight the track being previewed for easy identification.
   - **Error Handling**: If a preview URL is not available, the "Preview" button should be disabled or hidden.

#### **Implementation Steps**

1. **UI Changes**:
   - Update the `Track` component to include a "Preview" button.
   - Create an `AudioControls` sub-component with play/pause functionality.

2. **State Management**:
   - Update the App component to store the currently previewed track and its playback status.
   - Ensure that state changes are appropriately handled when a new track is previewed.

3. **Spotify.js Updates**:
   - Add the `Spotify.getTrackPreview(id)` method to retrieve preview URLs.

4. **Playback Handling**:
   - Implement `App.playPreview(trackId)` and `App.pausePreview()` methods to manage playback.
   - Ensure that playback stops if another preview is started.

5. **Testing**:
   - Thoroughly test the preview functionality across different tracks.
   - Ensure that playback controls function correctly and that there are no UI glitches.

### **CAVEATS**

- **Simultaneous Playback**: Ensure that only one track preview can play at any time. If a user tries to play another preview while one is already playing, the current preview should stop.
- **API Limitations**: Spotify's API may not provide preview URLs for all tracks. Ensure the app gracefully handles such cases.
- **Browser Compatibility**: Audio playback features may behave differently across browsers. Ensure consistent behavior, especially with play/pause functionality.

### **FUTURE CONSIDERATIONS**

- **Full Track Playback**: In the future, we could extend this functionality to allow for full-track playback for users with Spotify Premium accounts.
- **Playlist Preview**: Allow users to preview a set of tracks before finalizing their playlist, offering a more cohesive listening experience.