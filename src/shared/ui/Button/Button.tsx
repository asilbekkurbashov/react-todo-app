import styles from './Button.module.scss'
import { clsx } from '../../../helper/clsx'
import React,{ButtonHTMLAttributes} from 'react'

interface I_Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    type_btn?: 'completed' | 'uncompleted';
    class_btn?: string;
}

function Button(props: I_Props) {
    const {children, class_btn = '', type_btn ='', ...otherProps} = props

    const mods = {
      [styles[type_btn]] : true
    }

  return (
    <button {...otherProps}  className={clsx([styles.btn, styles[class_btn]],mods)}>
      {children}
    </button>
  )
}

export default Button