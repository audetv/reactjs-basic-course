import { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles, AppBar, Typography, Toolbar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff',
    textDecoration: 'none',
  },
});

class _Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} component={Link} to={'/'}>
              Messenger
            </Typography>
            <Button color="inherit" component={Link} to='/profile'>Profile</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const Header = withStyles(useStyles)(_Header);
export { Header }
