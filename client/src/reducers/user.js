import {LOGIN} from '../actions';
const axios = require('axios');

export default function(state={}, action){  
  switch(action.type){    
    case LOGIN:
      axios.get(`http://localhost:3001/api/users/${action.payload.user}`)
      .then(response => {
        if(response.data == ""){
          axios.post(`http://localhost:3001/api/users`,{
            name: action.payload.user
          }).then((user)=>{
            console.log("user",user);
            return user;            
          })
        }else{
          console.log("response",response);
          return response;
        }
      })
    default:
      return state;
  }
}