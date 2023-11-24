import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../shared/api/url.config";

export const getForEdit = createAsyncThunk(
  'TodosSlice/getForEdit',
  async (body:I_Todo, {rejectWithValue,dispatch}) => {
    try {
      const response = await axios.get(`${baseUrl}/todos/${body.id}`);
      if(response.status === 200) {
        dispatch(TodoActions.setTask(response.data))
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const editTodo = createAsyncThunk(
  "TodosSlice/editTodo",
  async (body:I_Todo, {rejectWithValue ,dispatch}) => {
    try {
      const response = await axios.put(`${baseUrl}/todos/${body.id}`, body)
      
      if(response.status === 200){
        dispatch(TodoActions.setTodosEdit(body))
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const toggleCompleted = createAsyncThunk(
  "TodosSlice/toggleCompleted",
  async (body:I_Todo, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.put(`${baseUrl}/todos/${body.id}`, body)
      if(response.status === 200){
        dispatch(TodoActions.toggleComplet(body))
      }
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)

export const toggleImportant = createAsyncThunk(
  "TodosSlice/toggleImportant",
  async (body:I_Todo, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.put(`${baseUrl}/todos/${body.id}`, body)
      if(response.status === 200){
        dispatch(TodoActions.toggleComplet(body))
      }
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)

export interface I_Todo {
  id: string;
  title: string;
  date: string;
  description: string;
  directory: string;
  important: boolean;
  completed: boolean;
}

interface I_State {
  todos: I_Todo[];
  pending: boolean;
  error: any;

  setPending:boolean,
  setError:any,

  deletePending:boolean,
  deleteError:any,

  task: I_Todo | null;
}

const initialState: I_State = {
  todos: [],
  pending: false,
  error: null,

  setPending:false,
  setError:null,

  deletePending:false,
  deleteError:null,

  task:null,
};

const TodosSlice = createSlice({
  name: "TodosSlice",
  initialState,
  reducers: {
    setTodosAdd (state, {payload}:PayloadAction<I_Todo>) {
      state.todos = [...state.todos, payload]
    },
    setTodosDelete(state, {payload}) {
      state.todos = state.todos.filter(el => el.id !== payload)
    },
    setTodosEdit(state, {payload}:PayloadAction<I_Todo>){
      const findIndex = state.todos.findIndex(el => el.id === payload.id) 
      state.todos[findIndex] = payload
    },
    toggleComplet(state, {payload}:PayloadAction<I_Todo>) {
      const findIndex = state.todos.findIndex(el => el.id === payload.id)
      state.todos[findIndex] = payload
    },
    toggleImport(state, {payload}:PayloadAction<I_Todo>) {
      const findIndex = state.todos.findIndex(el => el.id === payload.id)
      state.todos[findIndex] = payload
    },
    setTask(state, {payload}:PayloadAction<I_Todo | null>){
      state.task = payload  
    }
  },
});

export const { reducer: TodoReducer } = TodosSlice;
export const { actions: TodoActions } = TodosSlice;
