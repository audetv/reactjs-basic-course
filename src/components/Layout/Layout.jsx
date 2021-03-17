import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { Messages } from '../Messages';
import './Layout.scss';
import { Header } from '../Header';
import { ChatList } from '../ChatList';


class _Layout extends Component {
  render() {
    const { params } = this.props.match;

    return (
      <div className='container'>
        <Header />
        <div className='wrapper'>
          <ChatList />
          <Messages currentChat={params.chatId} />
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
