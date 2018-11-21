import * as React from 'react';
import { combineReducers } from 'redux'
import loginReducers from './loginReducers'
import loadingReducers from './loadingReducers'

export default combineReducers({
    loginReducers,
    loadingReducers
})