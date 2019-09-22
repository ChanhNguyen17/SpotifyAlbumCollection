import React from "react";
import axios from "axios";
import map from "lodash/map";
import TextField from '@material-ui/core/TextField';
import { authAPI, albumAPI } from "./config";
import hash from "./hash";
import Album from "./Album";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            search: "snow"
        };
        this.getAlbums = this.getAlbums.bind(this);
    }

    componentDidMount() {
        const token = hash.access_token;
        if (token) {
            this.setState({token});
            this.getAlbums(null, token);
        }
    }

    getAlbums(event, token) {
        let search = this.state.search;
        if(event){
            this.setState({ search: event.target.value });
            search = event.target.value;
        }
        axios.get(albumAPI(search),
            {headers: { Authorization : `Bearer ${token}` }})
            .then(({data}) => this.setState({ albums: data.albums.items}))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {!this.state.token && <a className="btn btn--loginApp-link" href={authAPI}>Spotify Login</a>}
                    {this.state.albums &&
                        <TextField
                            label="Search"
                            value={this.state.search}
                            onChange={event => this.getAlbums(event, this.state.token)}
                        />
                    }
                    {this.state.albums && map(this.state.albums, album => <Album album={album} key={album.uri}/>)}
                </header>
            </div>
        );
    }
}

export default App;
