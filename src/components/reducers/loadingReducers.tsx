import axios from 'axios';
const initialState = {
  loading: false,
};
export type loadingState = Readonly<typeof initialState>;
export const ACTION_TYPES_LOADING = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const loadingReducers = (state : loadingState = initialState , action) => {
    switch (action.type) {
      case 'START_LOADING':
        return{
          ...state,loading: true
        }
      case 'STOP_LOADING':
        return{
          ...state,loading: false
        }
    }
    return state;
  }

  export default loadingReducers;

  export const getStateLoading = (state: loadingState = initialState)  => (dispatch,getState) =>{
    return state;
  }

