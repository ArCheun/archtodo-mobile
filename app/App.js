import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './models/store';
import TodoList from './components/todo/TodoList';
import auth from '@react-native-firebase/auth';
import {Button, Text} from 'react-native';
import Login from './components/auth/Login';

const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    return auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (<Login />);
  }

  return (
      <Provider store={store}>
        <Text>Welcome {user.email}</Text>
        <Button title="Logout" onPress={() => auth().signOut()} />
        <TodoList />
      </Provider>
  );
};

export default App;
