import { useRef, useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false,
}
const inputReducer = (state, action) => {
    if(action.type === 'ON_CHANGE'){
        return {value: action.value, isTouched: state.isTouched}
    }
    else if(action.type === 'ON_BLUR'){
        return {value: state.value, isTouched: true}
    }
    return initialInputState;
}
const useInput = (validateValue) => {
   const [inputState,dispatchInput] = useReducer(inputReducer, initialInputState);
   const inputRef = useRef('');
   
   const isValid = validateValue(inputState.value);
   const hasError = isValid && inputState.isTouched;

    const onChange = (e) => {
        dispatchInput({type: 'ON_CHANGE', value:e.target.value})
    }

    const onBlur = () => {
        dispatchInput({type: 'ON_BLUR'})
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
    onBlur,
    reset,

   }
};

export default useInput;