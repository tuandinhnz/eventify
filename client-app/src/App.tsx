import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async (url: string) => {
      const response = await axios.get(url);
      console.log(response.data);
      setActivities(response.data);
    };
    fetchActivities('http://localhost:5000/api/activities');
  }, []);

  return (
    <div>
      <Header as="H2" icon="users" content="Eventify" />
      <List>
        {activities.map((activity: any) => {
          return <List.Item>{activity.title}</List.Item>;
        })}
      </List>
    </div>
  );
}

export default App;
