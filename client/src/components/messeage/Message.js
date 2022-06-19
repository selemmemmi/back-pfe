import React from 'react';

import { ChatBox } from './lib';
import  './lib/style.css';
import './style.css';

class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {},
    };
  }

  componentDidMount() {
    const messages = [
      {
        "text": "Hello there",
        "id": "1",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          
        },
      },
      {
        "text": "Hi Mr. Stark",
        "id": "2",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "3",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          
        },
      },
    ];

    const user = {
      "uid": "user1"
    };

    this.setState({ messages: messages, user: user });

  }

  render() {
    return (
      <div className='container' >
        <ChatBox messages={this.state.messages} />
      </div>
    )
  }
}

export default Message;
