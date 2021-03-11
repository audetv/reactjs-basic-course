import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Icon,
  List,
  TextField,
  withStyles,
  IconButton
} from '@material-ui/core'
import { MenuItem } from './MenuItem';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ChatList extends Component {
  state = {
    chats: [
      {
        id: '3589ff30-b78e-4d34-ae03-af1e51c761de',
        name: 'Chat 1',
        date: 'Jan 9, 2014',
        avatar: '1',
      },
      {
        id: '6861239f-4d22-41a9-bfff-5fb7bc6738c4',
        name: 'Chat 2',
        date: 'Jan 7, 2014',
        avatar: '2',
      },
      {
        id: '5e3d3917-0dd9-4edb-b4b5-aa97d87607bb',
        name: 'Chat 3',
        date: 'July 20, 2014',
        avatar: '3',
      },
    ],
    chatName: '',
  }

  addChat = () => {
    if (this.state.chatName !== '') {
      this.setState({
        chats: [...this.state.chats,
          {
            id: uuid(),
            name: this.state.chatName,
            date: new Date().toLocaleDateString(),
            avatar: '1'
          }
        ],
        chatName: '',
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className='chat-list'>
        <List className={classes.root}>
          {
            this.state.chats.map((chat, index) => (
              <MenuItem key={index} {...chat} />
            ))
          }
        </List>
        <div className="add-chat">
          <TextField
            value={this.state.chatName}
            label='Start new chat'
            onChange={(event) =>
              this.setState({
                chatName: event.target.value,
              })
            }
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                this.addChat();
              }
            }}
          />
          <IconButton
            color='primary'
            variant='contained'
            onClick={this.addChat}
          >
            <Icon>send</Icon>
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChatList);
