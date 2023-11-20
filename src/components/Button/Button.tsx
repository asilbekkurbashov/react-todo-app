import styles from './Button.module.scss'
import { clsx } from '../../helper/clsx'

interface Props{
    children: React.ReactNode
    type?: 'completed' | 'uncompleted' 
}

function Button(props: Props) {
    const {children, type ='', ...otherProps} = props

    const mods = {
      [styles[type]] : true
    }

  return (
    <button {...otherProps}  className={clsx([styles.btn],mods)}>
      {children}
    </button>
  )
}

export default Button