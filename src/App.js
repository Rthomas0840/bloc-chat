import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


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
  constructor(props) {
     super(props);
     this.state = {
       activeRoom: ''

     }

 }

 changeActiveRoom(room){
   this.setState({activeRoom: room})
 }

   render() {
    return (
     <div className= "everything">
      <div className= "header">
        <h2>BlocChat</h2>
      </div>
      <div className="rooms">
        <h2>Available Rooms</h2>
          <ul>
            <RoomList firebase= {firebase} />
          </ul>
        <h2>Current Room: {this.state.activeRoom} </h2>
      </div>
      <div className= "messages">
        <ul>
          <MessageList firebase= {firebase} />
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
