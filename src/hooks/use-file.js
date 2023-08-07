import { useRef, useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false,
}
const inputReducer = (state, action) => {
    if(action.type === 'ON_CHANGE'){
        return {value: action.value, isTouched: true}
    }
    return initialInputState;
}
const useFile = (validateValue) =>{
   const [inputState,dispatchInput] = useReducer(inputReducer, initialInputState);
   const inputRef = useRef('');
   
   const isValid = validateValue(inputState.value);
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
    hasError,
    inputRef,
    onChange,
    reset,

   }
};

export default useFile;