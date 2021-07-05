import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
import ActivityList from './ActivityList';

const ActivityDashboard = () => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry, loadingInitial } = activityStore;

  //This state is used to control the button loading indicator

  useEffect(() => {
    /*check if we already have the activityRegistry in the memory or not. If we have then we don't need to load the activities again.
    When we edit an activity and refresh the page, the activityRegistry only has 1 activity. Therefore the condition should be <= 1.*/
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (loadingInitial) return <LoadingComponent content='Loading App' />;

  return (
    <Grid>
      <Grid.Column width='10'>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width='6'>
        <ActivityFilters />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
