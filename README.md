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

- **Search for Songs**: Users can search for songs by title and potentially by artist or album.
- **View Song Details**: Display details like song title, artist, album, and album artwork.
- **Create and Save Playlists**: Users can create a playlist by adding or removing tracks and save it directly to their Spotify account.
- **Responsive Design**: The application is responsive and works well on various screen sizes.

## Project Structure

The application is organized into several components, utilities, and styles:

- **Components**: 
  - `App`: The root component that manages the application's state and coordinates the other components.
  - `SearchBar`: Allows users to search for songs in the Spotify library.
  - `Playlist`: Manages the user's playlist and the tracks within it.
  - `Track`: Displays individual song details and provides functionality to add or remove the song from the playlist.
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
4. **Save Playlist to Spotify**: Enter a playlist name and click the "Save" button to save the playlist to your Spotify account.

## Future Work

- **Enhanced Search**: Expand search functionality to include additional filters like genre, release year, etc.
- **Playlist Editing**: Allow users to edit existing Spotify playlists directly from the app.
- **Better Error Handling**: Implement more robust error handling and user feedback mechanisms.
- **Improved UX/UI**: Refine the user interface and experience based on user feedback.
- **Offline Functionality**: Explore the possibility of offline playlist creation that syncs when the user is online.
- **Track Audio Preview**: Add functionality to allow users to preview the audio of each track directly within the app.

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
    npm start
    ```

5. **Open the app in your browser**:
    - Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.

## Acknowledgements

- Thanks to [Spotify](https://www.spotify.com) for providing the API used in this project.
- Special thanks to the creators of [React](https://reactjs.org) and [Tailwind CSS](https://tailwindcss.com) for their amazing tools.
- Inspired by the Codecademy [Jammming project](https://www.codecademy.com).
