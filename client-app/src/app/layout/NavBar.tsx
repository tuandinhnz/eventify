import React from 'react';
import { Menu, Container, MenuItem, Button } from 'semantic-ui-react';
interface Props {
  openForm: () => void;
}
const NavBar = ({ openForm }: Props) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '10px' }}
          />
          Eventify
        </Menu.Item>
        <MenuItem name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activity" onClick={openForm} />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
