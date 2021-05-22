import React, { Component } from 'react'
import Card from './components/Card/Card'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Card 
        titulo='Test' 
        placeholder1='Nombre' 
        placeholder2='Apellido' 
        textbutton='Iniciar' 
        a1='Terminos y Condiciones' 
        label='Consultar ' 
        a2='Politica de Datos' 
        linka1='https://github.com/cmontesvergara' 
        linka2='https://github.com/cmontesvergara'/> 
        </React.Fragment>
    )
  }
}

export default App
