import * as types from "./actionType"

const initState={
    token:{},
    isError:false
}

export const AuthReducer=(state=initState,{type,payload})=>{
switch(type)
{
    case types.USER_LOGIN_REQ:
        return{
            ...state,
            isError:false,
        }
    case types.USER_LOGIN_SUCCESS:
        return{
            ...state,
            isError:false,
            token:payload
        }
    case types.USER_LOGIN_FAILURE:
        return{
            ...state,
            isError:true,
        }
        case types.USER_LOGOUT:
      return {
        ...state,
        token: null,
      };
        default:
            return state;
}
    }
    
