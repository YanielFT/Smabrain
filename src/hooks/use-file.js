import { useRef, useReducer } from "react";

const cvValidation = (value) => {
    let resp = true;
    if (value.target !== undefined) {
      if (value.target.files.length > 0) {
        if (
          value.target.files[0].size > 0 &&
          value.target.files[0].size <= 3145728
        ) {
          resp = false;
        }
      }
    }
    return resp;
  };

const initialInputState = {
    value: '',
    isTouched: false,
    name: 'Adjunte su CV en formato PDF',
}
const inputReducer = (state, action) => {
    if(action.type === 'ON_CHANGE' && action.value.target.files.length > 0){
        return {value: action.value, isTouched: true, name: action.value.target.files[0].name}
    }
    return initialInputState;
}
const useFile = () =>{
   const [inputState,dispatchInput] = useReducer(inputReducer, initialInputState);
   const inputRef = useRef('');
   
   const isValid = cvValidation(inputState.value);
   const hasError = !isValid && inputState.isTouched;

    const onChange = (e) => {
        dispatchInput({type: 'ON_CHANGE', value:e})
    }

    const reset = () => {
        dispatchInput({})
    }

   return{
    value: inputState.value,
    isValid,
    name: inputState.name,
    hasError,
    inputRef,
    onChange,
    reset,

   }
};

export default useFile;