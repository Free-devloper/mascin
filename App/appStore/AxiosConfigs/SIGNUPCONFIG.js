import React from 'react';
import {To_SIGNUP } from '../../misc/Urls';
export const RequestSignUPConfig =(data)=> {
  console.log(data);
  let Fdata=new FormData();
    Fdata.append('username',data.username);
    Fdata.append('email',data.email);
    Fdata.append('password',data.password)
 return({
  method: 'post',
  url: To_SIGNUP,
  headers: { 
    'Cookie': 'flidelapi=2d4edd07240fe5ce8f917e3594b5ee036f6b3c61',
  },
  data :Fdata
})
};