import * as React from 'react'
import {connect} from 'react-redux'

const classNames = require('classnames/bind')

import Api from '../utils/api'
import {setSities} from '../actions/citiesActions'
import {setWeather} from '../actions/weatherActions'
import WeatherWidget from './WeatherWidget'
import CitiesWidget from './CitiesWidget'

const cx = classNames.bind(require('./style/app.scss'))


class App extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        let cities = JSON.parse(localStorage.getItem('cities'))

        if (cities.length) {
            this.props.setSities(cities)
            this.handleSelectCity(cities[0])
        }
    }

    render() {
        const {citiesList, weather} = this.props

        return (
            <div className={cx('wrap')}>
                <div className={cx('container', 'grid-container')}>
                    <h1 className={cx('title', 'flex-grow-0')}>Weather</h1>
                    <div className={cx('row', 'flex-grow-1')}>
                        <div className={cx('column', 'md-6', 'flex')}>
                            <WeatherWidget options={weather} />
                        </div>
                        <div className={cx('column', 'md-6', 'flex')}>
                            <CitiesWidget
                                cities={citiesList}
                                addCity={this.handleAddCity.bind(this)}
                                selectCity={this.handleSelectCity.bind(this)}
                                deleteCity={this.handleDeleteCity.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleAddCity(formData) {
        if (formData.city) {
            let cities = [...this.props.citiesList]

            cities.unshift(formData.city)
            cities = Array.from(new Set(cities))

            this.handleSetCities(cities)
        }
    }

    handleDeleteCity(city) {
        let cities = new Set([...this.props.citiesList])

        cities.delete(city)
        cities = Array.from(new Set(cities))

        this.handleSetCities(cities)
    }

    handleSetCities(cities) {
        localStorage.setItem('cities', JSON.stringify(cities))
        this.props.setSities(cities)
        this.handleSelectCity(cities[0])
    }

    handleSelectCity(city) {
        Api.get(city)
            .then((data) => {
                this.props.setWeather(data)
            })
    }
}

function mapStateToProps(state) {
    return {
        citiesList: state.cities.citiesList,
        weather: state.weather,
    }
}

export default connect(mapStateToProps, {setWeather, setSities})(App)
