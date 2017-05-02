import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('./style/weatherWidget.scss'))


export default class WeatherWidget extends React.Component {

    render() {
        const {options} = this.props

        return (
            <div className={cx('wrap')}>
                {!Object.keys(options).length &&
                    <div>Выберите город</div>
                }
                {!!Object.keys(options).length && options.cod == 200 &&
                    <div>
                        <p>{options.name}</p>
                        <p>{Math.round(options.main.temp - 273.15)} C</p>
                        <p>{Math.round(options.main.temp_max - 273.15)} C</p>
                        <p>{Math.round(options.main.temp_min - 273.15)} C</p>
                        <p>{options.main.humidity} %</p>
                        <p>{options.wind.speed}</p>
                    </div>
                }
                {options.cod != 200 &&
                    <div>{options.message}</div>
                }
            </div>
        )
    }
}
