import * as React from 'react'


export default class Svg extends React.Component {

    render() {
        const {viewBox, color, width, height, size, className, style} = this.props

        return (
            <svg viewBox={viewBox}
                 width={width ? width : size ? size : '20'}
                 height={height ? height : size ? size : '20'}
                 fill={color ? color : '#2f2f2f'}
                 className={className}
                 style={Object.assign({}, style, {
                    display: 'inline-block',
                    verticalAlign: 'top'
                 })}>
                {this.props.children}
            </svg>
        )
    }
}
