export const SET_WEATHER = 'weather/SET_WEATHER'

export const setWeather = (weather) => {
    return {
        type: SET_WEATHER,
        weather
    }
}
