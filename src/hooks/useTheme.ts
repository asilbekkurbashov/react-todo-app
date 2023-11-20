import {useEffect} from 'react'
import { useAppSelector } from './useRedux'

export const useTheme = () => {
    const {theme} = useAppSelector(state => state.ThemeReducer);

    useEffect(() => {
        localStorage.setItem('mode' , theme)

        const rootHtml = document.querySelector(':root') as HTMLElement;

        const variables = ['menu-bg' ,'text', 'range-bg' ,'directory-bg','directory-text', 'main-bg' , 'li-active-bg', 'border' ,'major-text']

        variables.forEach((el:string) => {
            rootHtml.style.setProperty(`--${el}-default` , `var(--${el}-${theme})`)
        })

    }, [theme])

}