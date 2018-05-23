import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import RoomList from './components/RoomList';


var config = {
  apiKey: "AIzaSyCucT6CMxFyvZQy6BgnY6P2XKin5A3kQjI",
  authDomain: "bloc-chat-28e6a.firebaseapp.com",
  databaseURL: "https://bloc-chat-28e6a.firebaseio.com",
  projectId: "bloc-chat-28e6a",
  storageBucket: "",
  messagingSenderId: "98034455835"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
     <div>
      <div className= "header">
        <h2>BlocChat</h2>
      </div>
      <div className="rooms">
        <ul>
          <RoomList
          firebase= {firebase}
           />
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
