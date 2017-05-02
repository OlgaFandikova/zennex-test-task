import {
    SET_CITIES
} from '../actions/citiesActions'


const initialState = {
    citiesList: []
}

const cities = (state = initialState, action) => {
    switch (action.type) {

        case SET_CITIES:
            return Object.assign({}, state, {
                citiesList: action.cities
            })

        default:
            return state
    }
}

export default cities
