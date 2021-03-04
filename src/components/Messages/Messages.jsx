import { Component } from 'react';
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
      input: '',
    }
  }

  getLastMessage() {
    return this.state.messages.slice(-1)[0];
  };

  handleClick = (message) => {
    this.sendMessage(message);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      this.sendMessage(message);
    }
  }

  sendMessage = (message) => {
    this.setState({
      messages: [
        ...this.state.messages, { text: message, author: 'User', date: new Date() }
      ],
      'input': '',
    });
  }

  getRandomAnswer() {
    const answers = [
      'I am fine, and what\'s about you?',
      'I am just the Robot.',
      'My name is Robot.',
      'I am smart Robot 2.0.'
    ];
    return { text: answers[Math.floor(Math.random() * 4)], author: 'Robot', date: new Date() };
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
      <div className='layout'>
        <div className='message-field'>
          {messages.map((item, index) => (
            <MessageItem key={index} message={item} />
          ))}
        </div>

        <input
          name="input"
          style={{ fontSize: '22px' }}
          onChange={this.handleChange}
          value={this.state.input}
          onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
        />
        <button
          style={{ fontSize: '22px' }}
          onClick={() => this.handleClick(this.state.input)}
        >
          Отправить сообщение
        </button>
      </div>
    );
  };
}

const MessageItem = (props) => {
  const { text, author, date = null } = props.message;
  return <div
    className='message'
    style={{ alignSelf: author === 'Robot' ? 'flex-start' : 'flex-end' }}
  >
    <div>{text}</div>
    <small>
      <span>{author}</span>,&nbsp; {date.toLocaleString()}
    </small>
  </div>;
};

export { Messages };
