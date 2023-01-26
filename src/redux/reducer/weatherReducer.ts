import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherState } from "../Types/types";

const initState :WeatherState = {
    data:null,
    loading:false,
    error:''
}

const weatherReducer = (state =initState,action:WeatherAction) =>{

    switch(action.type){

        case GET_WEATHER:{
            return {
                ...state,
                loading:false,
                error:'',
                data:action.payload
            }
        }
        case SET_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case SET_ERROR:{
            return {
                ...state,
                error:action.payload
            }
        }
         default:{
            return state
        }
    }
}
export default weatherReducer;