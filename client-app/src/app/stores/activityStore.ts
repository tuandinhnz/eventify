import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Activity } from '../models/activity';
import { v4 as uuid } from 'uuid';

export default class ActivityStore {
  activities: Activity[] = [];
  isLoading: boolean = false;
  selectedActivity: Activity | undefined = undefined;
  editMode: boolean = false;
  loadingInitial: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  loadActivities = async () => {
    this.setLoadingInitial(true);
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        activity.date = activity.date.split('T')[0];
        //With MobX, we can mutate the state directly, unlike Redux the state is immutable and has to replaced by a new state.
        this.activities.push(activity);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  setIsLoading = (state: boolean) => {
    this.isLoading = state;
  };

  selectActivity = (id: string) => {
    this.selectedActivity = this.activities.find((a) => a.id === id);
  };

  cancelSelectedActivity = () => {
    this.selectedActivity = undefined;
  };

  createActivity = async (activity: Activity) => {
    this.setIsLoading(true);
    activity.id = uuid();
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activities.push(activity);
        this.selectedActivity = activity;
        this.editMode = false;
      });
      this.setIsLoading(false);
    } catch (error) {
      console.log(error);
      this.setIsLoading(false);
    }
  };

  updateActivity = async (activity: Activity) => {
    this.setIsLoading(true);
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        //we can also create a new state and replace the current state in MobX.
        this.activities = [...this.activities.filter((a) => a.id !== activity.id), activity];
        this.selectedActivity = activity;
        this.editMode = false;
      });
      this.setIsLoading(false);
    } catch (error) {
      console.log(error);
      this.setIsLoading(false);
    }
  };

  deleteActivity = async (id: string) => {
    this.setIsLoading(true);
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activities = [...this.activities.filter((a) => a.id !== id)];
      });
      this.setIsLoading(false);
    } catch (error) {
      console.log(error);
      this.setIsLoading(false);
    }
  };

  openForm = (id?: string) => {
    id ? this.selectActivity(id) : this.cancelSelectedActivity();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };
}
