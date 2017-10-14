import axios from "axios";
  
export const fetchUsers = () =>{
    return {
        type:"FETCH_USERS", //perfix
        payload : axios.get('http://rest.learncode.academy/api/wstern/users')
    }
}

  