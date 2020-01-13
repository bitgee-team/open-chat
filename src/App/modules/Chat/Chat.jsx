import React from 'react';
import { AppLayout } from 'components';
import LeftPanel from './components/LeftPanel';

const Chat = () => (
  <AppLayout
    leftPanel={<LeftPanel />}
  >
    Chat component
  </AppLayout>
);

export default Chat;