import {LOGIN} from '../actions';
const axios = require('axios');

export default function(state={}, action){  
  switch(action.type){    
    case LOGIN:
      console.log(action.payload);
      axios.get(`http://localhost:3001/api/users/${action.payload.user}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    default:
      return state;
  }
}