import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDPN1V8YWjITrONH_gJwnyLA4mYwMJz6FA',
      authDomain: 'auth-f3a18.firebaseapp.com',
      databaseURL: 'https://auth-f3a18.firebaseio.com',
      projectId: 'auth-f3a18',
      storageBucket: 'auth-f3a18.appspot.com',
      messagingSenderId: '823560403235'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        <LoginForm />
      </View>
    );
  };
};

export default App;
