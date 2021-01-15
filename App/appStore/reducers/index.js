import React from 'react'
import {combineReducers} from '@reduxjs/toolkit';
import Authreducer from './Authreducer';
import ProductReducer from './ProductReducer';
export const Rootreducer=combineReducers({
    Auth:Authreducer,
    Products:ProductReducer
});