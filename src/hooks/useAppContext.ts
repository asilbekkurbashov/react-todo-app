import {useContext} from 'react'
import { AppContext } from '../hoc/AppContext'

export const useAppContext = () => {
    return useContext(AppContext)
}