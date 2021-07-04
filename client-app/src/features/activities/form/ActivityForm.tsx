import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';

interface Params {
  id: string;
}

const ActivityForm = () => {
  const { activityStore } = useStore();
  const { isLoading, updateActivity, createActivity, loadActivity, loadingInitial, setLoadingInitial } = activityStore;
  const { id } = useParams<Params>();
  const history = useHistory();

  const [activity, setActivity] = React.useState({
    id: '',
    title: '',
    date: '',
    category: '',
    description: '',
    city: '',
    venue: '',
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => {
        setActivity(activity!);
      });
    } else {
      setLoadingInitial(false);
    }
  }, [id, loadActivity, setLoadingInitial]);

  const handleSubmit = async () => {
    if (activity.id.length !== 0) {
      await updateActivity(activity);
    } else {
      let newActivity = { ...activity, id: uuid() };
      await createActivity(newActivity);
    }
    history.push(`/activities/${activity.id}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  if (loadingInitial) return <LoadingComponent content='Loading activity ...' />;

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input placeholder='Title' name='title' value={activity.title} onChange={handleInputChange} />
        <Form.Input placeholder='Date' name='date' type='date' value={activity.date} onChange={handleInputChange} />
        <Form.TextArea placeholder='Description' name='description' value={activity.description} onChange={handleInputChange} />
        <Form.Input placeholder='Category' name='category' value={activity.category} onChange={handleInputChange} />
        <Form.Input placeholder='City' name='city' value={activity.city} onChange={handleInputChange} />
        <Form.Input placeholder='Venue' name='venue' value={activity.venue} onChange={handleInputChange} />
        <Button loading={isLoading} floated='right' positive type='submit' content='Submit' />
        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>
  );
};

export default observer(ActivityForm);
