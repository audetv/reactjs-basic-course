import { Component } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
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

  componentDidMount() {
    this.inputRef.focus();
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
    if (event.key === 'Enter') {
      this.sendMessage(message);
    }
  }

  sendMessage = (message) => {
    if (message !== '') {
      this.setState({
        messages: [
          ...this.state.messages, { text: message, author: 'User', date: new Date() }
        ],
        'input': '',
      });
    }
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
      this.inputRef.focus()
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
        <div style={{ width: '100%', display: 'flex' }}>
          <TextField
            inputRef={el => this.inputRef = el}
            name="input"
            style={{ fontSize: '22px' }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyDown={(event) => this.handleKeyUp(event, this.state.input)}
          />
          <IconButton
            color='primary'
            variant='contained'
            onClick={() => this.handleClick(this.state.input)}
          >
            <Icon>send</Icon>
          </IconButton>
        </div>
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
