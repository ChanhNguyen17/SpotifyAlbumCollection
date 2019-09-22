import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import map from "lodash/map";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { authAPI, albumAPI } from "./config";
import hash from "./hash";
import Album from "./Album";
import "./App.css";

const styles = () => ({
    notchedOutline: {
        borderWidth: 2,
        borderColor: 'white !important'
    }
});

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
        const { classes } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    {!this.state.token && <a className="btn btn--loginApp-link" href={authAPI}>Spotify Login</a>}
                    {this.state.albums &&
                        <TextField
                            style={{ margin: 36 }}
                            InputLabelProps={{ style: { color: 'white' }}}
                            InputProps={{
                                classes: { notchedOutline: classes.notchedOutline },
                                style: { color: 'white' }
                            }}
                            variant="outlined"
                            label="Search"
                            fullWidth
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

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
