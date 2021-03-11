import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { Messages } from '../Messages';
import ChatList from '../ChatList/ChatList';
import Header from '../Header/Header';
import './Layout.scss';


class _Layout extends Component {
  render() {
    const { params } = this.props.match;

    return (
      <div className='container'>
        <Header />
        <div className='wrapper'>
          <ChatList />
          <Messages currentChat={params.id} />
        </div>
      </div>
    );
  }
}

_Layout.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const Layout = withRouter(_Layout);

export { Layout };
