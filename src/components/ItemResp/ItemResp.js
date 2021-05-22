import React, { Component } from 'react'
import'./ItemResp.css'
import {coloredResp,getCorrect,getSeleted} from '../../js/script'
export default class ItemResp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        return (

            <div className='contentBodyResp'>
                <div className='bodyResp' style={{backgroundColor:coloredResp(this.props.pos)}}>
                    <div className='title'>
                        <h3>Pregunta {this.props.pos}</h3>
                        <label>Puntos: 10</label>
                    </div>
                    
                    <div className='resp'>
                        <div className='item'>
                            <h4>Respuesta: </h4>
                            <label>{getSeleted(this.props.pos)}</label>
                        </div>
                        <div className='item'>
                            <h4>Correcta: </h4>
                            <label>{getCorrect(this.props.pos)}</label>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
        )
    }
}
