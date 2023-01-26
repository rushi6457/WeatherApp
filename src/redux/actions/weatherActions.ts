import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError } from "../Types/types";
import { RootProps } from "postcss";
import { Action, AnyAction } from "redux";
import { __String } from "typescript";

const api_key = "f9e3ee87c2765b677ab21d53d1138a56";
export const getWeather = ({city}:any ): ThunkAction< void,AnyAction,null,WeatherAction> =>{
  
  
 return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9e3ee87c2765b677ab21d53d1138a56 `);

      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }
      
      const resData: WeatherData = await res.json();
      console.log(resData);
      dispatch({type: GET_WEATHER,payload: resData})
    
      
}
    catch(err:any) {
      dispatch({ type: SET_ERROR,payload:err.message})
    }
  }
}