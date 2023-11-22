import { Route, Routes } from "react-router-dom"
import {useEffect} from 'react'

// layout
import RootLayout from "./layout/RootLayout";

//pages
import AllTasks from "./pages/allTasks/AllTasks"
import TodayTasks from "./pages/todayTasks/TodayTasks"
import ImportantTasks from "./pages/importantTasks/ImportantTasks";
import CompletedTasks from "./pages/completedTasks/CompletedTasks";
import UnComppletedTasks from "./pages/unCompletedTasks/UnComppletedTasks";

import { useAppDispatch } from "./hooks/useRedux";
import {getTodos} from './state/todosSlice/Todos'
import { useTheme } from "./hooks/useTheme";

function App() {
  const dispatch = useAppDispatch()
  useTheme()  

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element= {<AllTasks/>}/>
        <Route path="today" element= {<TodayTasks/>}/>
        <Route path="important" element= {<ImportantTasks/>}/>
        <Route path="completed" element= {<CompletedTasks/>}/>
        <Route path="uncompleted" element= {<UnComppletedTasks/>}/>
      </Route>
    </Routes>
  )
}

export default App
