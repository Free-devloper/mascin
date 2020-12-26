import React from 'react'
import {createStore} from 'redux';
import {Rootreducer} from './reducers';
const  appStore=createStore(Rootreducer);

export default appStore;
