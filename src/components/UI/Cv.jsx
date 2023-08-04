import classes from './Cv.module.css'


export const Cv = ({id, placeholder, value, setValue}) => {
  return (
    <>
    <label className={`${classes.label}`} htmlFor={id}>{placeholder}</label>
    <input className={`${classes.input}`} onChange={setValue} value={value} type='file' id={id} />
    </>
    )
}
