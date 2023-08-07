import classes from "./Select.module.css";
import { useFocus } from "../../hooks/use-focus";
import React from "react";

export const Select = React.forwardRef(
  ({ id, placeholder, options, className, value, onChange, onBlur }, ref) => {
    const { labelFocus: selectFocus, focusHandler, blurHandler } = useFocus();

    const onBlurHandler = ()=>{
      blurHandler(onBlur);
    }

    const content = (
      <>
        <option value="">Nivel Escolar</option>
        {options.map((option) => {
          return <option value={option.value}>{option.name}</option>;
        })}
      </>
    );
    return (
      <>
        <select
          value={value}
          onChange={onChange}
          onBlur={onBlurHandler}
          className={`${classes.select} ${className} ${
            selectFocus !== "" ? classes[selectFocus] : ""
          }`}
          id={id}
          ref={ref}
          placeholder={placeholder}
          onFocus={focusHandler}
          key={id}
        >
          {content}
        </select>
      </>
    );
  }
);
