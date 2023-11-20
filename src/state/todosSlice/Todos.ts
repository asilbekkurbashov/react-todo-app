import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk<I_Todo[]>(
  "TodosSlice/getTodos",
  async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get<I_Todo[]>("http://localhost:3000/todo");
    if(response.status !== 200){
      throw new Error();
    }
    return  response.data
  } catch (error:any) {
    return rejectWithValue('Error')
  }
});

export const setTodos = createAsyncThunk<undefined, I_Todo>(
  "TodosSlice/setTodos",
  async (body, {rejectWithValue,dispatch}) => {
    try {
      const response = await axios.post("http://localhost:3000/todo", body)
      
      if(response.status === 201){
        dispatch(TodoActions.setTodosAdd(body))
      }
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)

export const deleteTodo = createAsyncThunk<undefined, string>(
  "TodosSlice/deleteTodo",
  async (id, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.delete(`http://localhost:3000/todo/${id}`)
      if(response.status === 200){
        dispatch(TodoActions.setTodosDelete(id))
      }
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)

export const editTodo = createAsyncThunk<undefined, I_Todo>(
  "TodosSlice/editTodo",
  async (body, {rejectWithValue ,dispatch}) => {
    try {
      const response = await axios.put(`http://localhost:3000/todo/${body.id}`, body)
      if(response.status === 200){
        dispatch(TodoActions.setTodosEdit(body))
      }
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)

export const toggleCompleted = createAsyncThunk<undefined, I_Todo>(
  "TodosSlice/toggleCompleted",
  async (body, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.put(`http://localhost:3000/todo/${body.id}`, body)
      if(response.status === 200){
        dispatch(TodoActions.toggleComplet(body))
      }
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)

export const toggleImportant = createAsyncThunk<undefined, I_Todo>(
  "TodosSlice/toggleImportant",
  async (body, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.put(`http://localhost:3000/todo/${body.id}`, body)
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
}

const initialState: I_State = {
  todos: [],
  pending: false,
  error: null,

  setPending:false,
  setError:null,

  deletePending:false,
  deleteError:null,
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.pending = true;
      })
      .addCase(getTodos.fulfilled, (state, {payload}:PayloadAction<I_Todo[]>) => {
        state.pending = false,
        state.todos = payload;
      })
      .addCase(getTodos.rejected, (state, {payload}) => {
        state.pending = false;
        state.error = payload;
      })
    builder 
      .addCase(setTodos.pending, (state) => {
        state.setPending = true
      })
      .addCase(setTodos.fulfilled, (state) => {
        state.setPending = false
      })
      .addCase(setTodos.rejected, (state, {payload}) => {
        state.setPending = false
        state.setError = payload
      })
    builder 
      .addCase(deleteTodo.pending, (state) => {
        state.deletePending = true
      })
      .addCase(deleteTodo.fulfilled, (state) => {
        state.deletePending = false
      })
      .addCase(deleteTodo.rejected, (state, {payload}) => {
        state.deletePending = false
        state.deleteError = payload
      })
  },
});

export const { reducer: TodoReducer } = TodosSlice;
export const { actions: TodoActions } = TodosSlice;
