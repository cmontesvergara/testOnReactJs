import React, { Component } from 'react'
import './Content.css'
import {getSelectorSelected,getPregunta,getOpcion,responder} from '../../js/script'

export default class Content extends Component {
    constructor(props){
        super(props);
        
        this.state={
            pregunta:props.pregunta,
            
        }
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event){
        const check1 = document.getElementById('check1')
        const check3 = document.getElementById('check3')
        const check2 = document.getElementById('check2')
        if(getSelectorSelected()!==this.props.pregunta){
            check1.checked=false;
            check2.checked=false;
            check3.checked=false;
        }
        if(event.target.id==='check1'){
            check2.checked=false;
            check3.checked=false;
            responder(this.props.pregunta,getOpcion(this.props.pregunta,1))
            
        }
        if(event.target.id==='check2'){
            check1.checked=false;
            check3.checked=false;
            responder(this.props.pregunta,getOpcion(this.props.pregunta,2))
        }
        if(event.target.id==='check3'){
            check1.checked=false;
            check2.checked=false;
            responder(this.props.pregunta,getOpcion(this.props.pregunta,3))
        }
    }
    
    
    render() {
        
        return (
            <div className='divContent'>
                
                <p id='pPregunta' ><strong id='sParraf'>{getPregunta(this.props.pregunta)}</strong></p>
                <div>
                    <div className='itemRespu' onChange={this.handleChange}>
                        <div className='contenedorfinal'><input type='checkbox' id='check1' onChange={this.handleChange} checked={this.state.check1}></input></div>

                        <div className='contenedorfinal'><label className='labelResp' htmlFor='check1'>{getOpcion(this.props.pregunta,1)}</label></div>
                    
                        
                    </div>
                    
                    <div className='itemRespu'>
                    <input type='checkbox' id='check2' onChange={this.handleChange} checked={this.state.check2}></input>
                        <label    className='labelResp' htmlFor='check2'>{getOpcion(this.props.pregunta,2)}</label>
                    </div>

                    <div className='itemRespu'>
                    <input type='checkbox' id='check3' onChange={this.handleChange} checked={this.state.check3}></input>
                        <label className='labelResp' htmlFor='check3'>{getOpcion(this.props.pregunta,3)}</label>
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}
