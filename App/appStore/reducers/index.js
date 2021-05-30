import React from 'react'
import {combineReducers} from '@reduxjs/toolkit';
import Authreducer from './Authreducer';
import ProductReducer from './ProductReducer';
import CategoryReducer from './CategoryReducer'
export const Rootreducer=combineReducers({
    Auth:Authreducer,
    Products:ProductReducer,
    Categories:CategoryReducer
});