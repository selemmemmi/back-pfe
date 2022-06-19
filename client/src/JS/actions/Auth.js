import axios from 'axios' ;
import { GET_CLIENTS_FAIL, GET_CLIENTS_LOAD, GET_CLIENTS_SUCCESS, GET_CLIENT_SUCCESS, LOGIN_USER } from '../constants/clients';




export const login = (user ,navigate ) => async (dispatch) => {
    dispatch({ type: GET_CLIENTS_LOAD });
  
    try {
      const result = await axios.post("/api/Auth/Login", user); 
      dispatch({ type: LOGIN_USER, payload: result.data });
      navigate.push(`client/:${result.data._id}`)
      //msg /success , user
    } catch (error) {
      // error.response.data.errors.map((el) =>
      //   setTimeout(function () {
      //     alert(el.msg);
      //   }, 3000)
      // );
      dispatch({ type: GET_CLIENTS_FAIL});
    }
  };