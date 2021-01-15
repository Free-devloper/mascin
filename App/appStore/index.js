import React from 'react'
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { Rootreducer } from './reducers';
const  appStore=()=>(createStore(Rootreducer,applyMiddleware(thunk)));
export default appStore;
