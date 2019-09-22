const origin = window.location.origin;

export const clientId = "";
export const redirect = `${origin}/redirect/`;
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];

export const albumAPI = search => `https://api.spotify.com/v1/search?q=${search}&type=album&market=FI`;

export const authAPI = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
