export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";


export interface Weather{
    description:string,
    icon:number,
    id:number,
    main:string
}

export interface WeatherData{
    base :string,
    main:{
        temp:number,
        feels_like:number,
        temp_min:number,
        temp_max:number,
        pressure:number,
        humidity:number,
        sea_level:number,
        grnd_level:number
    },
    visibility:number,
    wind:{
        speed:number,
        deg:number
    },
    clouds:{
        all:number
    },
    dt:number,
    sys:{
        type:number,
        id:number,
        sunrise:number,
        sunset:number,
        country:string
    },
    timezone:number,
    name:string,
    cod:number,
    id:number
}

export interface WeatherError{
    cod:string,
    message:string
}

export interface WeatherState{
    data:WeatherData | null;
    loading:boolean,
    error:string
}

interface GetWeatherAction{
    type: typeof GET_WEATHER,
    payload:WeatherData
}

interface SetLoadingAction{
    type: typeof SET_LOADING
}
interface SetErrorAction{
    type: typeof SET_ERROR,
    payload:string 
}
export interface ReduxDevTool{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:string
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction
