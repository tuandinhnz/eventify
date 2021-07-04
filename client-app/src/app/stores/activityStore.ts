import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Activity } from '../models/activity';

export default class ActivityStore {
  activityRegistry = new Map<string, Activity>();
  isLoading: boolean = false;
  selectedActivity: Activity | undefined = undefined;
  editMode: boolean = false;
  loadingInitial: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  //computed properties, sorting activities by date

  get activitiesByDate() {
    return Array.from(this.activityRegistry.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }

  loadActivities = async () => {
    this.setLoadingInitial(true);
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        this.setActivity(activity);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadActivity = async (id: string) => {
    //get the activity from activities state in the memory
    let activity = this.getActivity(id);
    //if the activity is available in memory then set the selectedActivity, else makes an api call to get it from the server.
    if (activity) {
      this.selectedActivity = activity;
      return activity;
    } else {
      this.setLoadingInitial(true);
      try {
        activity = await agent.Activities.details(id);
        this.setActivity(activity);
        runInAction(() => {
          this.selectedActivity = activity;
        });
        this.setLoadingInitial(false);
        return activity;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  //get an activity from activities in memory. If the activity is not in the memory then we need to make an api call to get it.
  private getActivity = (id: string) => {
    return this.activityRegistry.get(id);
  };

  private setActivity = (activity: Activity) => {
    activity.date = activity.date.split('T')[0];
    //With MobX, we can mutate the state directly, unlike Redux the state is immutable and has to replaced by a new state.
    this.activityRegistry.set(activity.id, activity);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  setIsLoading = (state: boolean) => {
    this.isLoading = state;
  };

  createActivity = async (activity: Activity) => {
    this.setIsLoading(true);
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
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
        this.activityRegistry.set(activity.id, activity);
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
        this.activityRegistry.delete(id);
        this.setIsLoading(false);
      });
      this.setIsLoading(false);
    } catch (error) {
      console.log(error);
      this.setIsLoading(false);
    }
  };
}
