export const environment = {
    production: false,
    // for local
    apiEndpoints:{
        company: 'https://localhost:44343/api/Company' ,
        login: 'https://localhost:44343/api/Auth/login',
        register: 'https://localhost:44343/api/Auth/register'
    }
    // for docker
    // apiEndpoints:{
    //     company: 'http://localhost:5000/api/Company' ,
    //     login: 'http://localhost:5000/api/Auth/login',
    //     register: 'http://localhost:5000/api/Auth/register'
    // }
  };