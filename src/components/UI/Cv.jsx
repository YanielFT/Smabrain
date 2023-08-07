import { useFocus } from "../../hooks/use-focus";
import classes from "./Cv.module.css";
import React from "react";
export const Cv = React.forwardRef(
  ({ id, placeholder, setValue, className }, ref) => {
    const { labelFocus, focusHandler, blurHandler } = useFocus();

    return (
      <>
        <label
          className={`${classes.label} ${className} ${labelFocus !== '' ? classes[labelFocus] : ''}`}
          htmlFor={id}
        >
          {placeholder}
        </label>
        <input
          accept=".pdf"
          key={id}
          ref={ref}
          onFocus={focusHandler}
          onBlur={()=>blurHandler(()=>{})}
          className={`${classes.input}`}
          onChange={(e) => setValue(e)}
          type="file"
          id={id}
        />
      </>
    );
  }
);
