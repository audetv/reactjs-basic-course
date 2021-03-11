import { Component } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import './Messages.scss'

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: {
        '3589ff30-b78e-4d34-ae03-af1e51c761de': [
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
        '6861239f-4d22-41a9-bfff-5fb7bc6738c4': [],
        '5e3d3917-0dd9-4edb-b4b5-aa97d87607bb': [
          {
            text: 'Hello from chat 2',
            author: 'User',
            date: new Date()
          }
        ]
      },
      textMessage: '',
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

    const { currentChat } = this.props;

    if (message !== '') {
      this.setState({
        messages: {
          ...this.state.messages,
          [currentChat]: [
            ...(this.state.messages[currentChat] || []),
            {
              text: message, author: 'User', date: new Date(),
            }
          ]
        },
        'textMessage': '',
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

  componentDidUpdate(_, prevState) {

    const { currentChat } = this.props;

    if (prevState.messages[currentChat]?.length !==
      this.state.messages[currentChat]?.length &&
      this.state.messages[currentChat]?.length % 2 === 1) {
      setTimeout(() => {
        this.setState({
          messages: {
            ...this.state.messages,
            [currentChat]: [
              ...this.state.messages[currentChat],
              this.getRandomAnswer(),
            ]
          },
        });
      }, 1000);
      this.inputRef.focus();
    }
  };

  render() {
    const { messages = [] } = this.state;
    const { currentChat } = this.props;

    return (
      <div className='messages'>
        <div className='message-field'>
          {messages[currentChat] && messages[currentChat].map((item, index) => (
            <MessageItem key={index} message={item} />
          ))}
        </div>
        <div style={{ width: '100%', display: 'flex' }}>
          <TextField
            inputRef={el => this.inputRef = el}
            name="textMessage"
            style={{ fontSize: '22px' }}
            onChange={this.handleChange}
            value={this.state.textMessage}
            onKeyDown={(event) => this.handleKeyUp(event, this.state.textMessage)}
          />
          <IconButton
            color='primary'
            variant='contained'
            onClick={() => this.handleClick(this.state.textMessage)}
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
