import React, { Component } from 'react'
import {actuallySelector,setSelectorSelected} from '../../js/script'
import '../Selectores/Selectores.css'

export default class Alink extends Component {
    constructor(props){
        super(props);
        this.state = {
            color:props.color,
            name:props.name,
            value:props.value
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        setSelectorSelected(parseInt( event.target.name) -1);
        const bn = document.getElementById('buttonSiguiente');
        bn.click()
        

    }
    render() {
        return (
            <div className='containerAlinkButton'><button className='alinkButton'  style={{backgroundColor:actuallySelector(parseInt(this.state.name))}} name={this.state.name} onClick={this.handleChange}>{this.state.value}</button></div>
        )
    }
}
