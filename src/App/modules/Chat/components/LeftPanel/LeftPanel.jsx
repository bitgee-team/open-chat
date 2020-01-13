import React, { Fragment } from 'react';
import { ChatListContainer, ChatListItem, Input } from 'components';

const LeftPanel = ({ chatList }) => (
  <Fragment>
    <Input placeholder="search" />
    <ChatListContainer>
      {chatList.map(({ name, avatar, lastDate, lastMessage, id }) => (
        <ChatListItem
          key={id}
          username={id}
          avatar={avatar}
          name={name}
          lastMessage={lastMessage}
          lastDate={lastDate}
        />
      ))}
    </ChatListContainer>
  </Fragment>
);

export default LeftPanel;