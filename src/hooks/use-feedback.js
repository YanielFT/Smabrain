import { useReducer, useCallback } from 'react';

const initialFeed = {
    key: null,
    message: null,
    type: null
}

function feedReducer(state, action) {
  if (action.type === 'SUCCESS') {
    return {
        key: new Date().getTime(),
        message: action.message,
        type: 'success',
    };
  }


  if (action.type === 'ERROR') {
    return {
        key: new Date().getTime(),
        message: action.message,
        type: 'error',
    };
  }

  return state;
}



export const useFeedback = () => {
    const [feedState, dispatch] = useReducer(feedReducer,initialFeed);

    const sendFeed = useCallback((type,message)=>{
        dispatch({type: type, message})
    },[])
    

  return (
    {
        ...feedState,
        sendFeed
    }
  )
}
