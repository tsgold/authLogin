import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

componentWillMount (){
  const config = {
    apiKey: "AIzaSyD7p-dtoOJB1vsu98GJWjeP14jBw1CBdFw",
    authDomain: "thursdayproject-41cd4.firebaseapp.com",
    databaseURL: "https://thursdayproject-41cd4.firebaseio.com",
    projectId: "thursdayproject-41cd4",
    storageBucket: "thursdayproject-41cd4.appspot.com",
    messagingSenderId: "193061127174"
  };
  firebase.initializeApp(config);


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
          return (<Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                  </Button>);
      case false:
          return <LoginForm />;
      default:
          return <Spinner />;
  }
}

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    )
  }
} 

export default App;