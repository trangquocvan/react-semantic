import axios from 'axios';
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
  TODO: 'ADD_TODO'
};

const todos = (state : TodosState = initialState , action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return{
          ...state,loading: true
        }
      case 'LOGIN': 
        return {
          ...initialState,loading: true
        }  
      default:
        return state
    }
  }

  export default todos;

  export const login = (username, password, rememberMe = false)  => (dispatch,getState) =>{
    dispatch({
      type: ACTION_TYPES.LOGIN,
      payload: axios.post('https://jsonplaceholder.typicode.com/posts', { username, password, rememberMe }).then(function (response) {
        return {
          ...initialState,loading: false
        }       
        }).catch(function (error) {
        return {
          ...initialState,loading: false
        }
        })
    });
    console.log('next state', getState())
  }
  export const getStateLogin = () => (dispatch,getState) =>{
    console.log('next state', getState())
  }
