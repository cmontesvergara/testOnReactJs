import React, { Component} from 'react'
import './Card.css'
import {post,contar,nombreCompleto,progress,unCheck,setSelectorSelected,getSelectorSelected,getOpcion,doCompletName,setNombre,setApellido} from './../../js/script'
import ProgressBar from './../ProgressBar/ProgressBar'
import Selector from './../Selectores/Selectores'
import Content from './../Content/Content'
import Indicador from './../Indicador/Indicador'
import Item from './../ItemResp/ItemResp'
import luser from '../../luser.svg'
import win from '../../win.svg'
import share from 'html2canvas'
class Card extends Component {
    constructor(props){
        super(props);
        this.state =
        {
            pantalla:1,
            addNombre: false,
            addApellido:false,
            selectedPregunta:getSelectorSelected(),
            background : luser
            
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        
        
    }
   
    handleBack(){
        if(getSelectorSelected()===1){
            const btn = document.getElementById('buttonAnterior');
            btn.hasAttribute('disable');
        }else{
            setSelectorSelected(getSelectorSelected()-1)
            this.setState({selectedPregunta:getSelectorSelected()});
            unCheck();
        }
    }
    handleNext(){
        if(getSelectorSelected()===10){
            this.setState({pantalla:3})
            if(contar()>6){
                this.setState({background:win})
            }
        }else{
            setSelectorSelected(getSelectorSelected()+1)
            this.setState({selectedPregunta:getSelectorSelected(),
            indiceOpciones:getSelectorSelected()});
            unCheck();
           
        }
    }
    
    handleChange(event) {
        if(event.target.name==="emailLogin"){
            setNombre(event.target.value);
            this.setState({addNombre: true});   
        }
        if(event.target.name==="passwordLogin"){
            setApellido(event.target.value);
            this.setState({addApellido: true});
        }
        if(event.target.name==="btnStart"){
            if(doCompletName()){
                this.setState({pantalla:2});
            }else{
                alert('Debes llenar todos los campos');
            }; 
        }
        this.setState({progressBar:progress()});

      }

      
    render() {

        if(this.state.pantalla === 1){
            return (
                <div className="container">
                    <div className="card" id="cardLogin" >
                        <h2>{this.props.titulo}</h2>
        
                        <input className="card inputLogin" type="text" placeholder={this.props.placeholder1}  name="emailLogin" onChange={this.handleChange} ></input>
        
                        <input className="card inputLogin" type="text" placeholder={this.props.placeholder2} name="passwordLogin" onChange={this.handleChange}></input>
        
                        <button className="btn btnLogin" id="btnStart" name="btnStart"  onClick={this.handleChange}>{this.props.textbutton}</button>
        
                        <a className="aLogin" href={this.props.linka1}>{this.props.a1}</a>
                        <br></br>
                        <label>{this.props.label}<a className="aLogin" href={this.props.linka2}>{this.props.a2}</a></label>
                    </div>
                </div>
            )

        }else if (this.state.pantalla === 2){
            return (
                <div className="containerBody">
                    <div className="card" id="cardBody" >
                        <ProgressBar />
                        
                        
                        <Selector/>
                        <br></br>
                        <Indicador/>
                        <br></br>
                        <Content pregunta={this.state.selectedPregunta}
                        resp1={this.state.selectedPregunta}
                        resp2={getOpcion(this.state.selectedPregunta)}
                        resp3={getOpcion(this.state.selectedPregunta)} />
                        <div id='buttonAntSigContainer'>
                            <button  id='buttonAnterior' onClick={this.handleBack}>{'Anterior'}</button>
                            <button id='buttonSiguiente' onClick={this.handleNext}>{'Siguiente'}</button>
                        </div>
                    </div>
                </div>
            )
        }else if(this.state.pantalla === 3){
            
            return(
                
                <div>
                    <div  id='cardResult'>
                        
                        <div id='post'>
                            <div id='img' style={{backgroundImage: `url(${this.state.background})`}}></div>
                            <h2 id='resultNombre'>{nombreCompleto()}</h2>
                            <div><h3>{post()}</h3></div>
                            
                            <h4>Tu puntaje fue {contar()}0 de 100</h4>
                            <h6>baja para ver tu resultado</h6>
                        </div>
                        <h3>{nombreCompleto()} estos son tus Resultados:</h3>
                        <Item pos='1'/>
                        <Item pos='2'/>
                        <Item pos='3'/>
                        <Item pos='4'/>
                        <Item pos='5'/>
                        <Item pos='6'/>
                        <Item pos='7'/>
                        <Item pos='8'/>
                        <Item pos='9'/>
                        <Item pos='10'/>
                        <span>Todos los Derechos Reservados</span>
                    </div>
                    
                </div>
            )
        }
        
        
    }
}

export default Card
