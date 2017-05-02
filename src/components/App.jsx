import * as React from 'react'

const classNames = require('classnames/bind')

import {container} from '../containers/containerDecorator'
import AppContainer from '../containers/AppContainer'
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
            this.props.handleSelectCity(cities[0])
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
                                addCity={this.props.handleAddCity}
                                selectCity={this.props.handleSelectCity}
                                deleteCity={this.props.handleDeleteCity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default container(AppContainer)(App)
