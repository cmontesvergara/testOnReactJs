var nombre = null;
var apellido = null;
var selectorSelected = 1;
var preguntas = {
    1:{
        pregunta:'Owen Hunt toca un instrumento en un episodio de la temporada 6 y en otro episodio menciona que de niño aprendio a tocar uno diferente, ¿cual son los dos instrumentos?',
        opciones:{1:'Guitarra y Saxofon', 2:'Gaita y Guitarra', 3:'Trompeta y Piano'},
        correcta:'Gaita y Guitarra',
        seleccionada:null
    },
    2:{
        pregunta:'Evelin Hunt, la madre de Owen Hunt tiene un novio mas joven que ella, Cual es el nombre y profesion de este',
        opciones:{1:'John-Bombero', 2:'Jhonatan-Veterano', 3:'Denny Duquette-Paciente'},
        correcta:'John-Bombero',
        seleccionada:null
    },
    3:{
        pregunta:'El padre de Cristina Yang tuvo un accidente y se desangro en frente de ella, ¿Que edad tenía Cristina Yang?',
        opciones:{1:'12 años', 2:'Su padre está vivo', 3:'9 años'},
        correcta:'9 años',
        seleccionada:null
    },
    4:{
        pregunta:'¿Recuerdan que Izzie tuvo una hija? Y luego se reencontraron cuando entró como paciente al hospital, ¿Cual es el nombre de la niña y el diagnostico por el que entró al hospital?',
        opciones:{1:'Hannah Klein - melanoma en etapa 4', 2:'Aria Stark - Leucemia', 3:'Hannah Klein -Leucemia'},
        correcta:'Hannah Klein -Leucemia',
        seleccionada:null
    },
    5:{
        pregunta:'Actual cargo de Amelia Shepard',
        opciones:{1:'Jefa de Neurocirugía', 2:'Jefa de Cardio', 3:'Neuroterapeuta'},
        correcta:'Jefa de Neurocirugía',
        seleccionada:null
    },
    6:{
        pregunta:'Nombre de las personas con las que estuvo casada Callie Torres',
        opciones:{1:'Penelope Blake - Mark Sloan', 2:`George O'Malley- Arizona Robbins`, 3:'Arizona Robbins - Erica Hahn'},
        correcta:`George O'Malley- Arizona Robbins`,
        seleccionada:null
    },
    7:{
        pregunta:'Cargo de Preston Burke',
        opciones:{1:'Jefe de cirugía Cardiotoraxica', 2:'Jefe de Enfermería ', 3:'Jefe de Neurocardiología '},
        correcta:'Jefe de cirugía Cardiotoraxica',
        seleccionada:null
    },
    8:{
        pregunta:'Nombre del 007',
        opciones:{1:'George Omaley', 2:`George O'Malley`, 3:`Jorge O'Malley`},
        correcta:`George O'Malley`,
        seleccionada:null
    },
    9:{
        pregunta:'Intern@ favorita de Richard Webber',
        opciones:{1:'Meredith Grey ', 2:'Alex karev', 3:'Miranda Bailey'},
        correcta:'Meredith Grey ',
        seleccionada:null
    },
    10:{
        pregunta:`Episodio piloto de grey's anatomy fue transmitido el 27 de marzo del año..`,
        opciones:{1:'2006', 2:'2005', 3:'2010'},
        correcta:'2005',
        seleccionada:null
    }
}
    function responder(pos,val){
        preguntas[pos].seleccionada = val;
    }
    function getresponder(pos){
        return preguntas[pos].seleccionada;
    }

    function getPregunta(val){
        selectorSelected = val;
        return preguntas[val].pregunta
    }
    function getOpcion(val,val2){
        return preguntas[val].opciones[val2]
    }

    function setSelectorSelected(par){
        selectorSelected= par;
    }
    function getSelectorSelected(){
        return selectorSelected;
        
    }
    function setNombre(par){
        nombre= par;
    }
    function setApellido(par){
        apellido= par;  
    }
    function doCompletName(){
        if(nombre===null || apellido===null) {
            return false
        }else{
            return true
        }
        
    }
    function unCheck(){
        const check1 = document.getElementById('check1')
        const check3 = document.getElementById('check3')
        const check2 = document.getElementById('check2')
        
        check1.checked=false;
        check2.checked=false;
        check3.checked=false;
    }
    function progress(){
        var contador = 0;
        for (let i =1; i<11 ;i++) {
            
            if (preguntas[i].seleccionada != null) {
                contador = contador +10;
                
            }
        }
        return `${contador}%`;
    }
    function actuallySelector(param){
        if (preguntas[param].seleccionada != null) {
            return '#7070c6'
            
        }else{
            return '#857f7fb2'
        }

    }
    function getIndicador(){
        return `Pregunta ${selectorSelected} de 10`
    }
    function coloredResp(pos){
        let color = '#cfcdcdb9'
        for (let i =1; i<11 ;i++) {
            
            if (preguntas[pos].seleccionada != null) {
                if(preguntas[pos].correcta==preguntas[pos].seleccionada){
                    color= '#7fff94'
                }else{
                    color = '#ff7f7f'
                }
                
            }
            
        }
        return color;
    }
    function nombreCompleto(){
        return `${nombre} ${apellido}`
    }
    function getSeleted(pos){
        return preguntas[pos].seleccionada;
    }
    function getCorrect(pos){
        return preguntas[pos].correcta;
    }
    function contar(){
        let cont=0;
        for (let i =1; i<11 ;i++) {
            
            if (preguntas[i].seleccionada != null) {
                if(preguntas[i].correcta==preguntas[i].seleccionada){
                    cont = cont +1;
                }
                
            }
            
        }
        return cont;
    }
    function post(){
        if(contar()>9){
            return `Felicidades, Eres verdaderamente Fan de Gey's Anatomy`
        }else if(contar()>6){
            return `Genial, Eres casi verdaderamente Fan de Gey's Anatomy`
        }else{
            return `Lo siento, NO Eres verdaderamente Fan de Gey's Anatomy`
        }
    }
    
    
    
export {contar,post,getCorrect,getSeleted,nombreCompleto,coloredResp,getIndicador,actuallySelector,progress,unCheck,getresponder,responder,getOpcion,getPregunta,doCompletName,setNombre,setApellido,getSelectorSelected,setSelectorSelected};



