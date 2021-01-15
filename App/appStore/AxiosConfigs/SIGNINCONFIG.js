import {To_SIGNIN } from '../../misc/Urls';
export const RequestSignInConfig =(data)=> {
  let Fdata=new FormData();
    Fdata.append('username',data.username);
    Fdata.append('email',data.username);
    Fdata.append('password',data.password)
 return({
  method: 'post',
  url: To_SIGNIN,
  headers: { 
    'Cookie': 'flidelapi=2d4edd07240fe5ce8f917e3594b5ee036f6b3c61',
  },
  data :Fdata
})
};