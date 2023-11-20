import {createSlice} from '@reduxjs/toolkit'
import { ThemeType } from './type'

export const getTheme = ():ThemeType => {
    return localStorage.getItem('mode') ? localStorage.getItem('mode') as ThemeType : 'light'
}

interface I_State {
    theme: ThemeType
}

const initialState:I_State = {
    theme: getTheme()
}

export const ThemeSlice = createSlice({
    name:'ThemeSlice',
    initialState,
    reducers:{
        toggleTheme(state){
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})

export const { reducer: ThemeReducer } = ThemeSlice;
export const { actions: ThemeActions } = ThemeSlice;