import React from 'react';
import { To_List_Products } from '../../misc/Urls';
export const LoadProductsConfig = {
    method: 'get',
    url: To_List_Products,
    headers: { 
      'Cookie': 'flidelapi=7bbe6fea35554fca0eebcb8977626511cfc80070'
    }
  };