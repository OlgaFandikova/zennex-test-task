import * as React from 'react'
import {connect} from 'react-redux'

import Api from '../utils/api'
import {setSities} from '../actions/citiesActions'
import {setWeather} from '../actions/weatherActions'
import {renderView} from './containerDecorator'


class AppContainer extends React.Component {

    componentWillMount() {
        let cities = JSON.parse(localStorage.getItem('cities'))

        if (cities.length) {
            this.props.setSities(cities)
            this.handleSelectCity(cities[0])
        }
    }

    render() {
        return renderView(this.props, {
            handleAddCity: this.handleAddCity.bind(this),
            handleDeleteCity: this.handleDeleteCity.bind(this),
            handleSelectCity: this.handleSelectCity.bind(this)
        })
    }

    handleAddCity(formData) {
        if (formData.city) {
            let cities = [...this.props.citiesList]

            Api.get(formData.city)
                .then((data) => {
                    cities.unshift(data.name || formData.city)
                    cities = Array.from(new Set(cities))

                    this.handleSetCities(cities)
                    this.props.setWeather(Object.assign({}, data, {
                        name: data.name || formData.city
                    }))
                })
        }
    }

    handleDeleteCity(city) {
        let cities = new Set([...this.props.citiesList])

        cities.delete(city)
        cities = Array.from(new Set(cities))

        this.handleSetCities(cities)
        this.handleSelectCity(cities[0])
    }

    handleSetCities(cities) {
        localStorage.setItem('cities', JSON.stringify(cities))
        this.props.setSities(cities)
    }

    handleSelectCity(city) {
        Api.get(city)
            .then((data) => {
                this.props.setWeather(Object.assign({}, data, {
                    name: data.name || city
                }))
            })
    }
}

function mapStateToProps(state) {
    return {
        citiesList: state.cities.citiesList,
        weather: state.weather
    }
}

export default connect(mapStateToProps, {setSities, setWeather})(AppContainer)
