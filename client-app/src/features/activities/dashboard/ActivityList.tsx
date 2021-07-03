import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';

const ActivityList = () => {
  const [target, setTarget] = useState('');

  const { activityStore } = useStore();
  const { isLoading, activitiesByDate, deleteActivity } = activityStore;

  const handleActivityDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };
  return (
    <Segment>
      <Item.Group>
        {activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button floated='right' content='View' color='blue' onClick={() => activityStore.selectActivity(activity.id)} />
                <Button
                  name={activity.id}
                  loading={isLoading && target === activity.id}
                  floated='right'
                  content='Delete'
                  color='red'
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                />

                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
