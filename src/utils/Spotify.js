const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID; // Replace with your client id
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;

export const Spotify = {
  getAccessToken: () => {
    if (accessToken) {
      return accessToken;
    };

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?&response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=playlist-modify-public playlist-modify-private`;
      window.location = accessUrl;
    }
  },

  search: async (term, accessToken) => {
    let token;

    accessToken ? token = accessToken : token = Spotify.getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const jsonResponse = await response.json();
    
    if (!jsonResponse) {
      return [];
    }

    const responseObject = jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      image: track.album.images[0].url,
      uri: track.uri
    }));

    return responseObject
  },

  getUserName: async (accessToken) => {
    let token;

    accessToken ? token = accessToken : token = Spotify.getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const jsonResponse = await response.json();

    if (!jsonResponse) {
      return null;
    }

    return jsonResponse.id
  },

  savePlaylist: async (playlistTitle, selectedTracks) => {
    let token;

    accessToken ? token = accessToken : token = Spotify.getAccessToken();

    const userName = await Spotify.getUserName();
    const trackUris = selectedTracks.map(track => track.uri);

    // First POST request: Create the playlist
    const response = await fetch(`https://api.spotify.com/v1/users/${userName}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: playlistTitle,
      })
    }) 

    const jsonResponse = await response.json();

    if (!jsonResponse || !jsonResponse.id) {
      throw new Error('Failed to create playlist');
    }

    const playlistId = jsonResponse.id;

    // Second POST request: Add tracks to the created playlist
    await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST', // Corrected method name
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        uris: trackUris, // Corrected the structure
        position: 0
      })
    });

  },
};

