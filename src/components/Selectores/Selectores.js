import React, { Component } from 'react'
import './Selectores.css'

import Alink from '../Alink/Alink'
export default class Selectores extends Component {
    constructor(props){
        super(props);
        this.state =
        {
            //selectorColorNormal:'#7070c6',
            //selectorColorCorrect:'#7fd6ad',
            //selectorColorIncorrect:'#e09090',
            
            color:props.color,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){

    }
    render() {
        return (
            <div className='contenedorSelectores'>
                
                <Alink name='1'  value='1'/>
                <Alink name='2'  value='2'/>
                <Alink name='3'  value='3'/>
                <Alink name='4'  value='4'/>
                <Alink name='5'  value='5'/>
                <Alink name='6'  value='6'/>
                <Alink name='7'  value='7'/>
                <Alink name='8'  value='8'/>
                <Alink name='9'  value='9'/>
                <Alink name='10' value='10'/>
                  
            </div>
        )
    }
}
