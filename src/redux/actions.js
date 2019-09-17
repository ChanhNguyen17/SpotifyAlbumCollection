import axios from 'axios';
import { LOGIN } from './actionTypes';

export const login = () => dispatch => {
    const scopes = 'user-read-private user-read-email';
    const uri = 'https://spotify-album-collection.herokuapp.com';
    axios.get(`https://accounts.spotify.com/authorize?response_type=code&client_id=${
        process.env.CLIEND_ID}${scopes? `&scope=${encodeURIComponent(scopes)}`: ''}&redirect_uri=${uri}`)
        .then(response =>
            dispatch({
                type: LOGIN,
                payload: response.data
            })
        )
        .catch(error => console.log('error: ', error))
};

export const fetchAlbums = search => dispatch => {
    axios.get('https://any-api.com:8443/https://api.spotify.com/v1/search?limit=20&offset=0&q=love&type=album&market=FI')
        .then(response => dispatch({
            type: 'abc',
            payload: response.data
        }))
        .catch(error => console.log('error: ', error))
};
