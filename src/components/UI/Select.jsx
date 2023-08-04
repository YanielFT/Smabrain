import classes from "./Select.module.css";

export const Select = ({ id, placeholder, options, className }) => {
  return (
    <>
    
    <select
      className={`${classes.select} ${className}`}
      id={id}
      placeholder={placeholder}
    >
      {      
      options.map((option) => {
        return <option value={option.value}>{option.name}</option>;
      })}
    </select>
    </>
  );
};
