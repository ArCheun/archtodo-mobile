import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodos, selectAllTodos} from '../models/todos/todosSlice';

const TodoList = () => {

  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchTodos());}, []);
  const todos = useSelector(selectAllTodos);

  return (
      <View>
        <FlatList data={todos}
                  renderItem={({item}) => <Text>{item.title}</Text>} />
      </View>
  );
};

export default TodoList;

