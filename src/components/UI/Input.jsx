import classes from "./Input.module.css";

export const Input = ({
  type,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  className,
}) => {
  return (
    <>
      <input
        className={`${classes.input} ${className} `}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
    />
    </>
  );
};
