import React from 'react'
import {combineReducers} from '@reduxjs/toolkit';
import Authreducer from './Authreducer'

export function Rootreducer(){
    return combineReducers({
    Auth:Authreducer
    })
}