import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

const HomePage = () => {
  const { userStore, modalStore } = useStore();
  const { isLoggedIn } = userStore;
  const { openModal } = modalStore;

  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
          Eventify
        </Header>
        {isLoggedIn ? (
          <>
            <Header as='h2' inverted content='Welcome to Eventify' />
            <Button as={Link} to='/activities' size='huge' inverted>
              Take me to the Events
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => openModal(<LoginForm />)} size='huge' inverted>
              Login
            </Button>
            <Button onClick={() => openModal(<RegisterForm />)} size='huge' inverted>
              Register
            </Button>
          </>
        )}
      </Container>
    </Segment>
  );
};

export default observer(HomePage);
