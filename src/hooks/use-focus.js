import { useState } from 'react'

export const useFocus = () => {
    const [labelFocus, setLabelFocus] = new useState('');

    const focusHandler = () => {
        setLabelFocus('focus')
      }
    const blurHandler = (eFunction) => {
        setLabelFocus('');
        eFunction();
      }   

  return (
   {
    labelFocus,
    focusHandler,
    blurHandler
   }
  )
}
