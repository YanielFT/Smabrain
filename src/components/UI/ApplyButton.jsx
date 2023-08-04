import classes from '../UI/ApplyButton.module.css'

export const ApplyButton = ({children}) => {
  return (
    <button className={classes.apply} type='submit'>
        {children}
    </button>
    )
}
