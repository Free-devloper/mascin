import React from 'react';
import {To_List_Categories } from '../../misc/Urls';
export const LoadCategoryConfig = {
    method: 'get',
    url: To_List_Categories,
    headers: { 
      'Cookie': 'flidelapi=7bbe6fea35554fca0eebcb8977626511cfc80070'
    }
  };