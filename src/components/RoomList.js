import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
     super(props);
     this.state = {
  rooms: [],
  newRoom: ''
};
  this.roomsRef = this.props.firebase.database().ref('rooms');
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
     const room = snapshot.val();
     room.key = snapshot.key;
     this.setState({ rooms: this.state.rooms.concat( room ) })
  });
}

    createRoom(newRoom){
      this.roomsRef.push({
        name: newRoom
      });
    }

    handleChange(event) {
      this.setState({newRoom: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.createRoom(this.state.newRoom);
      this.setState({newRoom: ''});
    }



   render() {
    return (
      <div>
        <ul>
        { this.state.rooms.map( (room, index) =>
          <li key={index} onClick={ (e) => this.props.changeActiveRoom  }>{ room.name }</li>
        )}
        </ul>
        <form onSubmit={this.handleSubmit}>
       <label>
         New Room:
         <input type="text" value={this.state.newRoom} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Create Room"  />
     </form>
      </div>
    );
  }
}



  export default RoomList;
