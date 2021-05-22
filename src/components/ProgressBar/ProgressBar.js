import React, { Component } from 'react'
import   './ProgressBar.css'
import {progress} from '../../js/script'
export default class ProgressBar extends Component {
    
    render() {
        return (
            <div  className='boxPbar'>
                <div className='ProgressContainer' >
                    <div className='ProgressContent' style={{width: progress()}} ></div>    
                </div>
                <div className='lbPorcentaje'><label >{progress()}</label></div>
            </div>
        )
    }
}
