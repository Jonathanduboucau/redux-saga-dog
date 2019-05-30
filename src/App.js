import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Flash.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { fetching, image, onRequestImage, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={image || logo} className="App-logo infinite tada" alt="logo" />
          <h1 className="App-title">Bienvenu sur Dog Saga</h1>
        </header>

        {image ? (
          <p className="App-intro">Cliquez ici pour générer un nouveau chien</p>
        ) : (
            <p className="App-intro">Remplacez l'icone de React par un chien !</p>
          )}

        {fetching ? (
          <button disabled style={{
            width: '90%',
            margin: 'auto',
            backgroundColor: 'cyan',
            border: 'none',
            borderRadius: '3px',
            padding: '10px 0',
            marginBottom: '20px',
          }}>Recherche en cours ...</button>
        ) : (
            <button style={{
              width: '90%',
              margin: 'auto',
              backgroundColor: 'cyan',
              border: 'none',
              borderRadius: '3px',
              padding: '10px 0',
              marginBottom: '20px'
            }} onClick={onRequestImage}>Générer un nouveau chien</button>
          )}

        {error && <p style={{ color: 'red' }}>Ooups, une erreur est survenue !</p>}
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    image: state.image,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestImage: () => dispatch({ type: 'API_CALL_REQUEST' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);