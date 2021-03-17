import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <ListItem button component={Link} to={`/chat/${props.id}`}>
      <ListItemAvatar>
        <Avatar
          alt={`Avatar n°${props.avatar}`}
          src={require(`./images/${props.avatar}.jpg`)}
        />
      </ListItemAvatar>
      <ListItemText primary={props.name} secondary={props.date} />
    </ListItem>
  );
};

export { MenuItem };
