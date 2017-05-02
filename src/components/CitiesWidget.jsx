import * as React from 'react'
import {Field, reduxForm} from 'redux-form'

const classNames = require('classnames/bind')

import {CloseIcon} from 'common/components/Icons'

const cx = classNames.bind(require('./style/citiesWidget.scss'))


class CitiesWidget extends React.Component {

    render() {
        const {handleSubmit, cities, deleteCity, selectCity, weather} = this.props

        return (
            <div className={cx('wrap')}>
                <form className={cx('form')} onSubmit={handleSubmit(this.handleSubmitForm.bind(this))}>
                    <div className={cx('flex-grow-1', 'input-wrap')}>
                        <Field
                            name="city"
                            component="input"
                            type="text"
                            placeholder="Enter city"
                        />
                    </div>
                    <div className={cx('flex-grow-0')}>
                        <button type="submit" className={cx('button')}>Add city</button>
                    </div>
                </form>
                <ul className={cx('list')}>
                    {cities.map((city, index) => (
                        <li key={index} className={cx({'active': city == weather.name})}>
                            <div className={cx('city')} onClick={() => selectCity(city)}>{city}</div>
                            <div className={cx('delete')} onClick={() => deleteCity(city)}>
                                <CloseIcon size={16} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    handleSubmitForm(data) {
        this.props.addCity(data)
        this.props.reset()
    }
}

export default reduxForm({
    form: 'addCityForm',
})(CitiesWidget)
