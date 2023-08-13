import classes from "./Input.module.css";
import React from "react";

export const Input = React.forwardRef(
  ({ type, id,value, onChange, onBlur, placeholder, className,pattern }, ref) => {
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
          pattern={pattern}
          ref={ref}
          key={id}
        />
      </>
    );
  }
);
