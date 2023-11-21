import styles from './Button.module.scss'
import { clsx } from '../../helper/clsx'
import React,{ButtonHTMLAttributes} from 'react'

interface I_Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    type_btn?: 'completed' | 'uncompleted';
}

function Button(props: I_Props) {
    const {children, type_btn ='', ...otherProps} = props

    const mods = {
      [styles[type_btn]] : true
    }

  return (
    <button {...otherProps}  className={clsx([styles.btn],mods)}>
      {children}
    </button>
  )
}

export default Button