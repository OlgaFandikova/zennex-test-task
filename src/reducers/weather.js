import {
    SET_WEATHER
} from '../actions/weatherActions'


const weather = (state = {}, action) => {
    switch (action.type) {

        case SET_WEATHER:
            return Object.assign({}, state, action.weather)

        default:
            return state
    }
}

export default weather
