import { makeAutoObservable } from 'mobx';
import { history } from '../..';
import agent from '../api/agent';
import { User, UserFormValue } from '../models/user';

import { store } from './store';

export default class UserStore {
  user: User | null = null;
  constructor() {
    makeAutoObservable(this);
  }
  //computed property to regconize if the user is logged in
  get isLoggedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValue) => {
    try {
      const user = await agent.Account.login(creds);
      store.commonStore.setToken(user.token);
      console.log(user);
      this.setUser(user);
      //redirect users to the Activities dashboard after they sucessfully login
      history.push('/activities');
      //close modal after the user successfully login
      store.modalStore.closeModal();
    } catch (error) {
      //If we catch an error, throw it back to the LoginForm, the component that called the method
      throw error;
    }
  };

  register = async (creds: UserFormValue) => {
    try {
      const user = await agent.Account.register(creds);
      store.commonStore.setToken(user.token);
      console.log(user);
      this.setUser(user);
      //redirect users to the Activities dashboard after they sucessfully login
      history.push('/activities');
      //close modal after the user successfully login
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    store.commonStore.setToken(null);
    window.localStorage.removeItem('jwt');
    this.setUser(null);
    history.push('/');
  };

  setUser = (user: User | null) => {
    this.user = user;
  };

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
}
