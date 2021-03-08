import { Component } from 'react';
import { Messages } from '../Messages';
import ChatList from '../ChatList/ChatList';
import Header from '../Header/Header';
import './Layout.scss';

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='wrapper'>
          <ChatList />
          <Messages />
        </div>
      </div>
    );
  }
}
