import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

// creo la constante root para mostrar lo que necesito
const root = ReactDOM.createRoot(document.getElementById('root'))

// Creo un componente para crear un boton y que en el render pueda elegir los atributos de manera mas comoda


//Root render se usa para exponer lo que quiero mostrar
root.render(
<React.Fragment>
    <App/>
</React.Fragment>
)