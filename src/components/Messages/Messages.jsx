import {Component} from 'react';
import './Messages.scss'

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          text: 'Hello world!',
          author: 'User',
          date: new Date()
        },
        {
          text: 'How are you?',
          author: 'User',
          date: new Date()
        }
      ],
    }
  }

  getLastMessage() {
    return this.state.messages.slice(-1)[0];
  };

  addMessage() {
    this.setState({messages: [
      ...this.state.messages, {text: 'Whassap?', author: 'User', date: new Date()}
      ]});
  };

  getRandomAnswer() {
    const answers = [
      'I am fine, and what\'s about you?',
      'I am just the Robot.',
      'My name is Robot.',
      'I am smart Robot 2.0.'
    ];
    return {text: answers[Math.floor(Math.random() * 4)], author: 'Robot', date: new Date()};
  };

  componentDidUpdate() {
    if (this.getLastMessage().author === 'User') {
      setTimeout(() => {
        this.setState({
          messages: [...this.state.messages, this.getRandomAnswer()],
        });
      }, 1000);
    }
  };

  render() {
    const messages = this.state.messages;

    return (
      <>
        <div className='messages'>
          {messages.map((item, index) => (
            <MessageItem key={index} message={item}/>
          ))}
        </div>

        <button onClick={this.addMessage.bind(this)}>Send message</button>
      </>
    );
  };
}

const MessageItem = (props) => {
  const {text, author, date} = props.message;
  return <div className='message-item'>
    <span>{author}:&nbsp;</span>
    {text}<br />
    {date.toLocaleString()}
  </div>;
};

export {Messages};
