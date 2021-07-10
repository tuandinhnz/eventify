import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Container, MenuItem, Button, Image, Dropdown } from 'semantic-ui-react';
import { useStore } from '../stores/store';

const NavBar = () => {
  const { userStore } = useStore();
  const { user, logout } = userStore;
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
          Eventify
        </Menu.Item>
        <MenuItem as={NavLink} name='Activities' to='/activities' />
        <MenuItem as={NavLink} name='Errors' to='/errors' />
        <Menu.Item>
          <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
          <Dropdown pointing='top left' text={user?.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile' icon='user' />
              <Dropdown.Item onClick={logout} text='Logout' icon='power' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
