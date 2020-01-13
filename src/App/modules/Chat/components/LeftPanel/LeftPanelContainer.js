import { connect } from 'react-redux';
import LeftPanel from './LeftPanel';

const mapStateToProps = (state) => ({
  chatList: Object.values(state.chat.list).map(l => ({
    id: l.id,
    name: l.name,
    avatar: l.avatar,
    lastDate: 'el martes',
    lastMessage: 'hola como estas haciendo',
  }))
});

export default connect(mapStateToProps)(LeftPanel);