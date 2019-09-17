import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './redux/actions';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    componentDidMount() {
        this.props.login();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

const mapStateToProps = ({dataReducer}) => ({dataReducer});
const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
