import * as React from 'react'

const hoistStatics = require('hoist-non-react-statics')


function container(containerComponent) {
    return function (component) {
        const lightComponent = (props) => {
            return React.createElement(
                containerComponent,
                Object.assign({view: component}, props)
            )
        }

        return hoistStatics(lightComponent, component)
    }
}

export default container

function renderView(origProps, addProps) {
    const props = objectWithoutProperties(origProps, ['view'])
    const resultProps = (addProps ? Object.assign({}, props, addProps) : origProps)

    return React.createElement(origProps.view, resultProps)
}

function objectWithoutProperties(obj, keys) {
    let target = {}

    for (let i in obj) {
        if (keys.indexOf(i) >= 0) continue
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
        target[i] = obj[i]
    }

    return target
}

export {
    container,
    renderView,
}