import { observer } from 'mobx-react-lite';
import React from 'react';
import { Menu, Container, MenuItem, Button } from 'semantic-ui-react';
import { useStore } from '../stores/store';

const NavBar = () => {
  const { activityStore } = useStore();
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
          Eventify
        </Menu.Item>
        <MenuItem name='Activities' />
        <Menu.Item>
          <Button positive content='Create Activity' onClick={() => activityStore.openForm()} />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
