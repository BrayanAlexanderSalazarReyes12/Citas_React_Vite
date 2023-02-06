import { useState, useEffect } from "react"
import Form from "./components/form"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})
  
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])
  
  const eliminarPaciente = id =>{
    const pacientesActualizado = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizado)
  }

  return (
    <div className="container mx-auto mt-5">
      <Header/>
      <div className="mt-12 md:flex">
        <Form
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App