import * as React from 'react'

const classNames = require('classnames/bind')

import {container} from '../containers/containerDecorator'
import AppContainer from '../containers/AppContainer'
import WeatherWidget from './WeatherWidget'
import CitiesWidget from './CitiesWidget'

const cx = classNames.bind(require('./style/app.scss'))


class App extends React.Component {

    render() {
        const {citiesList, weather, handleAddCity, handleSelectCity, handleDeleteCity} = this.props

        return (
            <div className={cx('wrap')}>
                <div className={cx('container', 'grid-container')}>
                    <h1 className={cx('title', 'flex-grow-0')}>Weather</h1>
                    <div className={cx('row', 'flex-grow-1')}>
                        <div className={cx('column', 'md-6', 'flex')}>
                            <WeatherWidget options={weather} cities={citiesList} />
                        </div>
                        <div className={cx('column', 'md-6', 'flex')}>
                            <CitiesWidget
                                weather={weather}
                                cities={citiesList}
                                addCity={handleAddCity}
                                selectCity={handleSelectCity}
                                deleteCity={handleDeleteCity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default container(AppContainer)(App)
