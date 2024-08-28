

// Spotify client configuration, using environment variables for security
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;        // Spotify Client ID from environment variables
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;  // Redirect URI registered in Spotify API settings
let accessToken;                                                // Variable to store the access token

export const Spotify = {
  
  // Method to retrieve the Spotify access token
  getAccessToken: () => {
    // Return the token if it's already been obtained
    if (accessToken) {
      return accessToken;
    };

    // Extract the access token and expiration time from the URL (if present)
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      // Store the access token and calculate expiration time
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Clear the access token after the expiration time has passed
      window.setTimeout(() => accessToken = '', expiresIn * 1000);

      // Remove the token parameters from the URL
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      // Redirect the user to the Spotify authorization page if no token is present
      const accessUrl = `https://accounts.spotify.com/authorize?&response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=playlist-modify-public playlist-modify-private`;
      window.location = accessUrl;
    }
  },


  // Method to search for tracks on Spotify by a search term
  search: async (term, accessToken) => {
    // Retrieve the token if not provided
    let token;
    accessToken ? token = accessToken : token = Spotify.getAccessToken();

    // Make a GET request to the Spotify API to search for tracks
    const response = await fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
      headers: {
        Authorization: `Bearer ${token}` // Authorization header with the access token
      }
    });

    const jsonResponse = await response.json(); // Parse the JSON response
    
    // Return an empty array if the response is invalid
    if (!jsonResponse) {
      return [];
    }

    // Map the response data to an array of track objects
    const responseObject = jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      image: track.album.images[0].url,
      uri: track.uri,
      preview: track.preview_url
    }));

    return responseObject // Return the array of track objects
  },

  // Method to get the current user's Spotify username
  getUserName: async (accessToken) => {
    // Retrieve the token if not provided
    let token;
    accessToken ? token = accessToken : token = Spotify.getAccessToken();

    // Make a GET request to the Spotify API to retrieve user information
    const response = await fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`  // Authorization header with the access token
      }
    });

    const jsonResponse = await response.json(); // Parse the JSON response

    // Return null if the response is invalid
    if (!jsonResponse) {
      return null;
    }

    return jsonResponse.id // Return the user's Spotify ID
  },

  
  // Method to save a playlist to the current user's Spotify account
  savePlaylist: async (playlistTitle, selectedTracks) => {
    // Retrieve the token if not provided
    let token;
    accessToken ? token = accessToken : token = Spotify.getAccessToken();

    // Get the current user's Spotify username
    const userName = await Spotify.getUserName();

    // Extract the URIs of the selected tracks
    const trackUris = selectedTracks.map(track => track.uri);

    // First POST request: Create a new playlist for the user
    const response = await fetch(`https://api.spotify.com/v1/users/${userName}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,   // Authorization header with the access token
        'Content-Type': 'application/json'  // Ensure the content type is JSON
      },
      body: JSON.stringify({ 
        name: playlistTitle,  // Playlist title provided by the user
      })
    }) 

    const jsonResponse = await response.json(); // Parse the JSON response

    // Throw an error if the playlist creation failed
    if (!jsonResponse || !jsonResponse.id) {
      throw new Error('Failed to create playlist');
    }

    // Extract the playlist ID from the response
    const playlistId = jsonResponse.id;

    // Second POST request: Add tracks to the newly created playlist
    await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST', // Corrected method name
      headers: {
        Authorization: `Bearer ${token}`,   // Authorization header with the access token
        'Content-Type': 'application/json'  // Ensure the content type is JSON
      },
      body: JSON.stringify({
        uris: trackUris,  // Array of track URIs to be added to the playlist
        position: 0       // Optional: Position in the playlist where the tracks should be added
      })
    });
  },
};

