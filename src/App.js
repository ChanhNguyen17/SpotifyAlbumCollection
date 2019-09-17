import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { login } from './redux/actions';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

class codeSpotify extends React.Component {
    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        console.log(values.code);
        axios.post('https://accounts.spotify.com/api/token', {
            grant_type: 'authorization_code',
            code: values.code,
            redirect_uri: 'http://localhost:3000/callback/'
        })
    }

    render(){
        return (
            <h2>codeSpotify</h2>
        );
    }
}

class tokenSpotify extends React.Component {
    render(){
        return(
            <h2>tokenSpotify</h2>
        );
    }
}

const CLIEND_ID = '';
const scopes = 'user-read-private user-read-email';
const uri = 'http://localhost:3000/callback/';

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <a href={`https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIEND_ID}${scopes? `&scope=${encodeURIComponent(scopes)}`: ''}&redirect_uri=${encodeURIComponent(uri)}`}>
                    Click me
                </a>
            </div>
        );
    }
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={App} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
                <Route path='/callback/' component={codeSpotify} />
            </div>
        </Router>
    );
}

const mapStateToProps = ({dataReducer}) => ({dataReducer});
const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch);

export default AppRouter;
