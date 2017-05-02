import * as React from 'react'
import {Field, reduxForm} from 'redux-form'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('./style/citiesWidget.scss'))


class CitiesWidget extends React.Component {

    render() {
        const {handleSubmit, cities, deleteCity, selectCity} = this.props

        return (
            <div className={cx('wrap')}>
                <form onSubmit={handleSubmit(this.handleSubmitForm.bind(this))}>
                    <Field
                        name="city"
                        component="input"
                        type="text"
                        placeholder="Введите город"
                    />
                    <button type='submit'>добавить город</button>
                </form>
                <ul>
                    {cities.map((city, index) => (
                        <li key={index}>
                            <div onClick={() => selectCity(city)}>{city}</div>
                            <div onClick={() => deleteCity(city)}>удалить</div>
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
