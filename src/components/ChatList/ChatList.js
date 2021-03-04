import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ChatList extends Component {
  chats = [
    {
      id: 1,
      name: 'Chat 1',
      date: 'Jan 9, 2014',
      avatar: '1',
    },
    {
      id: 2,
      name: 'Chat 2',
      date: 'Jan 7, 2014',
      avatar: '2',
    },
    {
      id: 3,
      name: 'Chat 3',
      date: 'July 20, 2014',
      avatar: '3',
    },
  ];

  render() {
    const { classes } = this.props;

    return (
      <div className='chat-list'>
        <List className={classes.root}>
          {
            this.chats.map((chat) => (
              <ListItem key={chat.id}>
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
      </div>
    );
  }
}

export default withStyles(useStyles)(ChatList);
