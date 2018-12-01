import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDPN1V8YWjITrONH_gJwnyLA4mYwMJz6FA',
      authDomain: 'auth-f3a18.firebaseapp.com',
      databaseURL: 'https://auth-f3a18.firebaseio.com',
      projectId: 'auth-f3a18',
      storageBucket: 'auth-f3a18.appspot.com',
      messagingSenderId: '823560403235'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.screenCenteredStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  screenCenteredStyle: {
    justifyContent: 'center',
    flex: 1,
  }
};

export default App;
