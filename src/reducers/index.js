import {combineReducers} from 'redux'
import {reducer as formRedusers} from 'redux-form'

import citiesRedusers from './cities'
import weatherRedusers from './weather'


export default combineReducers({
    cities: citiesRedusers,
    weather: weatherRedusers,
    form: formRedusers
})
