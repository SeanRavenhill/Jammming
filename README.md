
# Jammming

## Project Overview

**Jammming** is a React web application that allows users to search the Spotify library, create custom playlists, and save them to their Spotify account. The application integrates with the Spotify API to enable users to find songs by title, artist, or album, and then organize these songs into playlists.

## Technologies Used

- **React**: For building the user interface and managing component state.
- **Tailwind CSS**: For styling the application with utility-first CSS classes.
- **Spotify API**: For searching songs, retrieving user information, and saving playlists to the user's Spotify account.
- **JavaScript**: For handling logic and API requests.
- **HTML & CSS**: For structuring and styling the app.
- **Git & GitHub**: For version control and code hosting.

## Features

- **Search for Songs**: Users can search for songs by title, artist, or album.
- **View Song Details**: Display details like song title, artist, album, and album artwork.
- **Create and Save Playlists**: Users can create a playlist by adding or removing tracks and save it directly to their Spotify account.
- **Responsive Design**: The application is responsive and works well on various screen sizes.
- **Track Audio Preview**: Users can preview tracks within the app using a 30-second audio clip.
- **Single Track Playback with Error Handling**: Manage audio playback smoothly with proper error handling to avoid crashes, and provide clear feedback via UI updates.

## Recent Additions and Refactors

### Single Track Playback with Error Handling and UI Updates (Commit: eba4d98)

- Implemented logic for single track playback in the `Track` component using `useRef` and `useEffect`.
- Added error handling to manage audio playback errors, ensuring a smooth user experience.
- Updated UI elements to reflect playback status with conditional rendering and disabled states during playback.
- Improved the `Tracklist` and `SearchResults` components to manage playback state and handle user interactions.
- Enhanced maintainability by adding detailed comments throughout the implementation.

### Refactor for Audio Playback Management (Commit: 60a05b9)

- Refactored the `Track` component to handle audio playback using a `useEffect` hook for better control over side effects.
- Introduced a new function to manage playback state, ensuring smooth transitions between play/pause events.
- Ensured proper cleanup of audio playback when the `Track` component unmounts or the playback state changes.
- Updated the technical design document to reflect these changes, outlining the rationale for the new approach.

### Preview Track Feature Technical Design Document (Commit: df690ec)

- Added a new technical design document (`jammming_technical_design_document.md`) outlining the implementation details for the Preview Track feature.
  - **Objective**: Enable users to preview tracks within the app.
  - **Background**: Details the problem space and considerations.
  - **Technical Design**: Describes the architecture and flow for implementing track preview functionality.
  - **Implementation Steps**: Provides a step-by-step guide for implementing the feature.
  - **Caveats and Future Considerations**: Discusses potential challenges and future improvements.

## Project Structure

The application is organized into several components, utilities, and styles:

- **Components**: 
  - `App`: The root component that manages the application's state and coordinates the other components.
  - `SearchBar`: Allows users to search for songs in the Spotify library.
  - `Playlist`: Manages the user's playlist and the tracks within it.
  - `Track`: Displays individual song details, provides functionality to add/remove songs from the playlist, and manages audio playback for song previews.
  - `Button`: A reusable button component used throughout the app.

- **Utilities**:
  - `Spotify`: Handles authentication with Spotify, searching for songs, and saving playlists.
  - `TrackUtils`: Contains utility functions for adding and removing tracks from the playlist.
  - `ListUtils`: Provides functions to generate an order map and reorder search results.

- **Styling**:
  - **Tailwind CSS**: Used for consistent and modular styling across components.
  - **index.css**: Contains Tailwind directives and any additional global styles.

## How to Use the App

1. **Search for Songs**: Enter a song title (or artist, album) in the search bar and press search.
2. **Add Songs to Playlist**: Click the "+" button next to a song to add it to your playlist.
3. **Remove Songs from Playlist**: Click the "−" button to remove a song from your playlist.
4. **Preview Tracks**: Click the play button to listen to a 30-second preview of a track.
5. **Save Playlist to Spotify**: Enter a playlist name and click the "Save" button to save the playlist to your Spotify account.

## Future Work

- **Enhanced Search**: Expand search functionality to include additional filters like genre, release year, etc.
- **Playlist Editing**: Allow users to edit existing Spotify playlists directly from the app.
- **Better Error Handling**: Continue refining error handling and user feedback mechanisms.
- **Improved UX/UI**: Refine the user interface and experience based on user feedback.
- **Offline Functionality**: Explore the possibility of offline playlist creation that syncs when the user is online.

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SeanRavenhill/jammming.git
    cd jammming
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add your Spotify Client ID and Redirect URI:
        ```env
        VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
        VITE_SPOTIFY_REDIRECT_URI=http://localhost:3000
        ```
        - Note: The redirect URL could be different depending on your build tools, such as Vite. This URL also needs to match the one you use in your settings for the Spotify Web API.

4. **Run the app**:
    ```bash
    npm run dev
    ```

5. **Open the app in your browser**:
    - Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.

## Acknowledgements

- Thanks to [Spotify](https://www.spotify.com) for providing the API used in this project.
- Special thanks to the creators of [React](https://reactjs.org) and [Tailwind CSS](https://tailwindcss.com) for their amazing tools.
- Inspired by the Codecademy [Jammming project](https://www.codecademy.com).
