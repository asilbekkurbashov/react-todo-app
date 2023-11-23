import { Route, Routes } from "react-router-dom"
import {useEffect} from 'react'

// layout
import RootLayout from "./layout/RootLayout";

import { useAppDispatch } from "./hooks/useRedux";
import {getTodos} from './state/todosSlice/Todos'
import { useTheme } from "./hooks/useTheme";
import { routes } from "./layout/routes";

function App() {
  const dispatch = useAppDispatch()
  useTheme()  

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        {routes.map(({path, element}) => (
          <Route key={path} path={path} element={element}/>
        ))}
      </Route>
    </Routes>
  )
}

export default App
