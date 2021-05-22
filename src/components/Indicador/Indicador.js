import React, { Component } from 'react'
import {getIndicador} from '../../js/script'
export default class Indicador extends Component {
    render() {
        return (
            <label>{getIndicador()}</label>
        )
    }
}
