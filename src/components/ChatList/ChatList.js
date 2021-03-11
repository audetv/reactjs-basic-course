import { Component } from 'react';
import { Icon, List, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import IconButton from '@material-ui/core/IconButton';

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
        id: uuid(),
        name: 'Chat 1',
        date: 'Jan 9, 2014',
        avatar: '1',
      },
      {
        id: uuid(),
        name: 'Chat 2',
        date: 'Jan 7, 2014',
        avatar: '2',
      },
      {
        id: uuid(),
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
              <ListItem key={chat.id} button component={Link} to={`/chat/${index}`}>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${chat.avatar}`}
                    src={require(`./images/${chat.avatar}.jpg`)}
                  />
                </ListItemAvatar>
                <ListItemText primary={chat.name} secondary={chat.date} />
              </ListItem>
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
