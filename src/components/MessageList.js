import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []

    };
    this.messRef = this.props.firebase.database().ref('messages');
}

  componentDidMount() {
    this.messRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  };

  render() {
    return(
      <section>
        <ul>
  { this.state.messages.map((message) => {
        if(message.roomId === this.props.activeRoom)
        return <li>{message.content}</li>
      })
    }
        </ul>
    </section>
);
}
}


  export default MessageList;
