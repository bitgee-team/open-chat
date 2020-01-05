import React, { useState, Fragment } from 'react';
import AppLayout from 'components/AppLayout';
import Input from 'components/Input';
import ChatListContainer from 'components/ChatListContainer';
import MainContainer from 'components/MainContainer';
import ChatListItem from 'components/ChatListItem';
import MainHeader from 'components/MainHeader';
import MainFooter from 'components/MainFooter';
import Message from 'components/Message';

const avatar1 = 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-1/p160x160/80251576_10220737668612321_4655012484573298688_o.jpg?_nc_cat=105&_nc_ohc=shuSzM3i4dwAQn4gqkHnZizsFE_Y8RpBdNjBf0NCdTJZ7y0UMMIU0Bk_w&_nc_ht=scontent.faep9-2.fna&oh=820ca9b35227afc75d12566aa8bfa79e&oe=5E71FA1D';
const avatar2 = 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/36841822_1733020990100351_4852428822382903296_n.jpg?_nc_cat=105&_nc_ohc=jpMdsSdc6AwAQk-mHJnrUHS7DNH487d0I6-DXu9-spr7Ra2D23L8ghFmA&_nc_ht=scontent.faep9-2.fna&oh=d41b942868d422b083c19f0115cc6f6f&oe=5E660F47';
const avatar3 = 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/s960x960/79194705_2707826235923397_6668185654754541568_o.jpg?_nc_cat=107&_nc_ohc=98kv9GenYawAQl612qvtS2MD30PW97iZ3T2BnJOXVYA3YvgrJc41Amf4A&_nc_ht=scontent.faep9-2.fna&oh=6e0377f21fe048253c28b405d292ee69&oe=5E9D2370';
const avatar4 = 'https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/p960x960/71587357_427132181517334_1361153368931696640_o.jpg?_nc_cat=108&_nc_ohc=AqiPT2BMqesAQlE6trwkb8Zra03RnThpFKtsOwCoH1MZndK-hniAYdrDg&_nc_ht=scontent.faep9-1.fna&oh=4e8ef6dbd12b37ffa862227a011b03c3&oe=5E65F66D';

const chatList = [
  {
    name: "David Figueroa",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar1,
    lastDate: "martes",
  },
  {
    name: "Dommir Figueroa",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar4,
    lastDate: "martes",
  },
  {
    name: "Viviannys Diaz",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar2,
    lastDate: "martes",
  },
  {
    name: "Gisselle Diaz",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar3,
    lastDate: "martes",
  },
  {
    name: "David Figueroa 1",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar1,
    lastDate: "martes",
  },
  {
    name: "Dommir Figueroa 1",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar4,
    lastDate: "martes",
  },
  {
    name: "Viviannys Diaz 1",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar2,
    lastDate: "martes",
  },
  {
    name: "Gisselle Diaz 1",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar3,
    lastDate: "martes",
  },
  {
    name: "David Figueroa 2",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar1,
    lastDate: "martes",
  },
  {
    name: "Dommir Figueroa 2",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar4,
    lastDate: "martes",
  },
  {
    name: "Viviannys Diaz 2",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar2,
    lastDate: "martes",
  },
  {
    name: "Gisselle Diaz 2",
    lastMessage: "Login code: 23535. Do not give this code to anyone, even if they say they are from Telegram!",
    avatar: avatar3,
    lastDate: "martes",
  }
];

function App() {
  const [messages, setMessages] = useState([]);
  const onAddMessage = (message) => {
    setMessages([message, ...messages]);
  }
  return (
    <AppLayout
      leftPanel={
        <Fragment>
          <Input placeholder="search" />
          <ChatListContainer>
            {chatList.map(({ name, avatar, lastDate, lastMessage }) => (
              <ChatListItem
                key={name}
                avatar={avatar}
                name={name}
                lastMessage={lastMessage}
                lastDate={lastDate}
              />
            ))}
          </ChatListContainer>
        </Fragment>
      }
    >
      <Fragment>
        <MainHeader
          name="David Figueroa"
          avatar={avatar2}
        />

        <MainContainer>
          {
            messages.map((n, i) => (
              <Message text={n} key={n} />
            ))
          }
        </MainContainer>

        <MainFooter>
          <Input placeholder="Type a message..." onSubmit={onAddMessage} />
        </MainFooter>
      </Fragment>
    </AppLayout>
  );
}

export default App;
