import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

const ServerError = () => {
  const { commonStore } = useStore();
  const { error } = commonStore;
  return (
    <Container>
      <Header as='h1' content='Server Error' />
      <Header sub as='h5' color='red' content={error?.message} />
      {error?.details && (
        <Segment>
          <Header as='h4' content='Stack trace' color='teal' />
          <code style={{ marginTop: '10px' }}>{error.details}</code>
        </Segment>
      )}
    </Container>
  );
};

export default observer(ServerError);
