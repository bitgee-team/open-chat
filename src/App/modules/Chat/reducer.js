import {
  SEND_MESSAGE,
} from './actionsTypes';


const avatar1 = 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-1/p160x160/80251576_10220737668612321_4655012484573298688_o.jpg?_nc_cat=105&_nc_ohc=shuSzM3i4dwAQn4gqkHnZizsFE_Y8RpBdNjBf0NCdTJZ7y0UMMIU0Bk_w&_nc_ht=scontent.faep9-2.fna&oh=820ca9b35227afc75d12566aa8bfa79e&oe=5E71FA1D';
const avatar2 = 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/36841822_1733020990100351_4852428822382903296_n.jpg?_nc_cat=105&_nc_ohc=jpMdsSdc6AwAQk-mHJnrUHS7DNH487d0I6-DXu9-spr7Ra2D23L8ghFmA&_nc_ht=scontent.faep9-2.fna&oh=d41b942868d422b083c19f0115cc6f6f&oe=5E660F47';
const avatar3 = 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/s960x960/79194705_2707826235923397_6668185654754541568_o.jpg?_nc_cat=107&_nc_ohc=98kv9GenYawAQl612qvtS2MD30PW97iZ3T2BnJOXVYA3YvgrJc41Amf4A&_nc_ht=scontent.faep9-2.fna&oh=6e0377f21fe048253c28b405d292ee69&oe=5E9D2370';


const initialState = {
  error: false,
  loading: false,
  list: {
    1: {
      name: 'David Figueroa',
      id: '1',
      messages: [],
      avatar: avatar1,
    },
    2: {
      name: 'Viviannys Diaz',
      id: '2',
      messages: [],
      avatar: avatar2,
    },
    3: {
      name: 'Gisselle Diaz',
      id: '3',
      messages: [],
      avatar: avatar3,
    }
  },
  friends: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        error: false,
        loading: true
      };
    default:
      return state
  }
}

export default reducer;