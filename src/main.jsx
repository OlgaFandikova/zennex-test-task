import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from './reducers'
import App from './components/App'

import './common/style/base.scss'


const store = createStore(reducers)

export default class Content extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(
    <Content />,
    document.getElementById('content')
)