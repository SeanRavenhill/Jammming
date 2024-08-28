# **Technical Design Document: Preview Track Feature**

**Date:** 20 August 2024 | 20-08-2024    
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

#### **Updated Approach Based on Exploration**

During the initial exploration phase while working on the logic for implementing the preview feature, it became evident that managing the track preview state within each individual `Track` component could lead to potential issues, such as multiple tracks playing simultaneously. Therefore, the approach was adjusted to lift the state up to a parent component to manage track previews more effectively.

This adjustment ensures that only one track plays at a time, providing a better user experience and aligning with React 18's best practices.

#### **Retrieve and Play Preview Track**

1. **Component Updates**:
   - **Track Component**:
     - The `Track` component will be updated to remove local state management for track playback (`isPlaying`).
     - Instead, the playback state will be lifted to the parent component, ensuring only one track can be played at a time.
   - **Parent Component State Management**:
     - A new state variable, `currentPlayingTrackId`, will be added to the parent component (`App.jsx` or another suitable parent component) to track which track is currently playing.
     - The `Track` component will receive `currentPlayingTrackId` and a `handlePlayPreview` function as props to control playback.

2. **State Management**:
   - **Parent Component State**:
     - The `App.jsx` component (or a relevant parent component) will manage the playback state for the entire app using `currentPlayingTrackId`.
     - The state will be updated whenever a user initiates playback for a new track, automatically pausing any currently playing track.

3. **API Integration**:
   - **Spotify API**: The track preview URL is already available from the `Spotify.search()` method, so no additional API calls are needed for this feature.

4. **Method Creation**:
   - **Parent Component Method**:
     - `handlePlayPreview(trackId)`: This method will be added to the parent component to manage the track preview playback. It will:
       1. Update the `currentPlayingTrackId` state to the selected track's ID.
       2. Ensure that any previously playing track is paused.

   - **Effect Hook**:
     - `useEffect` will be used within the `Track` component to handle side effects such as stopping the audio when the component unmounts or when playback is paused.

5. **UI/UX Considerations**:
   - **Play/Pause Button**: The "Preview" button will toggle to "Pause" when the track is currently playing, and back to "Play" when it is paused or stopped.
   - **Track Indication**: Highlight the currently playing track to make it easily identifiable for the user.
   - **Error Handling**: If a preview URL is not available, the "Preview" button should be disabled or hidden.

#### **Implementation Steps**

1. **UI Changes**:
   - Update the `Track` component to receive the `currentPlayingTrackId` and `handlePlayPreview` as props.
   - Modify the `Track` component to use the `useEffect` hook for managing audio playback and cleanup.

2. **State Management**:
   - Update the `App.jsx` component (or a relevant parent component) to store and manage the `currentPlayingTrackId` state.
   - Implement the `handlePlayPreview` method in the parent component to manage which track is currently playing.

3. **Playback Handling**:
   - Ensure that only one track can be played at a time by checking the `currentPlayingTrackId` in the parent component.
   - Use `useEffect` in the `Track` component to manage playback side effects, such as stopping audio when necessary.

4. **Testing**:
   - Thoroughly test the preview functionality across different tracks to ensure only one track plays at a time.
   - Ensure that the UI updates correctly based on the playback state, and that there are no issues with the audio playback or UI responsiveness.

### **CAVEATS**

- **Simultaneous Playback**: The updated approach ensures that only one track can be played at a time by managing the playback state at a higher level in the component hierarchy.
- **API Limitations**: Spotify's API may not provide preview URLs for all tracks. Ensure the app gracefully handles such cases.
- **Browser Compatibility**: Audio playback features may behave differently across browsers. Ensure consistent behavior, especially with play/pause functionality.

### **FUTURE CONSIDERATIONS**

- **Full Track Playback**: In the future, we could extend this functionality to allow for full-track playback for users with Spotify Premium accounts.
- **Playlist Preview**: Allow users to preview a set of tracks before finalizing their playlist, offering a more cohesive listening experience.