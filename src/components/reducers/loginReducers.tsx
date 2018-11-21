import axios from 'axios';
import loading, {ACTION_TYPES_LOADING} from './loadingReducers';
const initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false, // Errors returned from server side
  showModalLogin: false,
  account: {} as any,
  errorMessage: null as string, // Errors returned from server side
  redirectMessage: null as string
};
export type TodosState = Readonly<typeof initialState>;
export const ACTION_TYPES = {
  LOGIN: 'LOGIN',
  TODO: 'ADD_TODO',
  SUCCESS_LOADING: 'SUCCESS_LOADING'
};

const loginReducers = (state : TodosState = initialState , action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return{
          ...state,loading: true
        }
      case 'LOGIN': 
        return {
          ...initialState,loading: true
        }  
      case 'SUCCESS_LOADING': 
        return {
          ...initialState,loading: false
        }  
      default:
        return state
    }
  }

  export default loginReducers;

  export const login = (username, password, rememberMe = false)  => (dispatch,getState) =>{
    dispatch({type: ACTION_TYPES_LOADING.START_LOADING});
    dispatch({
      type: ACTION_TYPES.LOGIN,
      payload: axios.post('https://jsonplaceholder.typicode.com/posts', { username, password, rememberMe }).then(function (response) {
          dispatch({type: ACTION_TYPES_LOADING.STOP_LOADING});
        }).catch(function (error) {
          dispatch({type: ACTION_TYPES_LOADING.STOP_LOADING});
        })
    });
    console.log('next state', getState())
  }
  export const getStateLogin = () => (dispatch,getState) =>{
    console.log('next state', getState())
  }
