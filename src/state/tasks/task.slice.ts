import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { I_Task, T_TaskItem } from './task.type'

const initialState: I_Task = {
    task: null
}

const taskSlice= createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        setTask(state, {payload}:PayloadAction<T_TaskItem | null>){
            state.task = payload
        }
    }
})

export const {reducer: TaskReducer} = taskSlice
export const {actions: TaskActions} = taskSlice