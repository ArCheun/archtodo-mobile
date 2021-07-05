import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import server from '../../services/api/server';

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({});

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (ids) => {
      return await server.fetchTodos(ids);
    },
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
        fetchTodos.fulfilled,
        (state, action) => {
          todosAdapter.setAll(state, action.payload);
        },
    );
  },
});

export const {selectAll: selectAllTodos} = todosAdapter.getSelectors(
    state => state.todos,
);

export default todosSlice.reducer;
