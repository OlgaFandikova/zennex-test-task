import * as React from 'react'

const classNames = require('classnames/bind')
import moment from 'moment'

import {MapMarkerIcon, ArrowIcon} from 'common/components/Icons'

const cx = classNames.bind(require('./style/weatherWidget.scss'))


export default class WeatherWidget extends React.Component {

    render() {
        const {options, cities} = this.props

        return (
            <div className={cx('wrap')}>
                {!!cities.length && options.cod == 200 &&
                    <div>
                        <div className={cx('row', 'align-items-center', 'mb-30')}>
                            <div className={cx('column', 'flex', 'align-items-center')}>
                                <MapMarkerIcon size={35} color="#f06097" />
                                <h2 className={cx('title')}>{options.name}</h2>
                            </div>
                            <div className={cx('column', 'text-right', 'text-uppercase', 'font-25', 'font-weight-300')}>
                                {moment().format('DD MMMM YYYY')}
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('column')}>
                                <p className={cx('font-27', 'font-weight-300')}>{moment().format('dddd')}</p>
                                <i className={cx('weather-icon', 'wi', `wi-owm-${options.weather[0].id}`, {
                                    'very-warm': Math.round(options.main.temp - 273.15) >= 30,
                                    'warm': Math.round(options.main.temp - 273.15) < 30,
                                    'normal': Math.round(options.main.temp - 273.15) < 20,
                                    'cold': Math.round(options.main.temp - 273.15) < 10,
                                    'very-cold': Math.round(options.main.temp - 273.15) <= 0
                                })} />
                            </div>
                            <div className={cx('column')}>
                                <div className={cx('temp')}>
                                    <ArrowIcon className={cx('arrow-down')} />
                                    <span className={cx('font-25', 'font-weight-300')}>
                                        {Math.round(options.main.temp_min - 273.15)}<sup>o</sup>C
                                    </span>
                                    <ArrowIcon />
                                    <span className={cx('font-25', 'font-weight-300')}>
                                        {Math.round(options.main.temp_max - 273.15)}<sup>o</sup>C
                                    </span>
                                </div>
                                <strong className={cx('main-temp')}>
                                    {Math.round(options.main.temp - 273.15)}<sup>o</sup>C
                                </strong>
                                <p className={cx('humidity')}>
                                    <span>Humidity</span>: {options.main.humidity}%
                                </p>
                                <p className={cx('speed')}>
                                    <span>Wind</span>: {options.wind.speed}m/s
                                </p>
                            </div>
                        </div>
                    </div>
                }
                {!cities.length &&
                    <div className={cx('placeholder')}>select city</div>
                }
                {options.cod != 200 &&
                    <div className={cx('placeholder')}>{options.message}</div>
                }
            </div>
        )
    }
}
