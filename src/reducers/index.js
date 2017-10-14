import { combineReducers } from "redux"

import { userReducer }  from "./userReducer"

  // Combine reducers 
  export const reducer = combineReducers({
     userReducer :userReducer,
  })

