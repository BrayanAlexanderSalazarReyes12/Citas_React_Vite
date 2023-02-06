import { useState, useEffect } from "react"
import Error from "./Error";

const Form = ({pacientes,setPacientes,paciente,setPaciente}) => {
  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [Sintomas,setSintomas] = useState('');
  const [error,setError] = useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.Sintomas)
    }
  },[paciente])

  const generarid = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    //validacion de formulario
    if([nombre,propietario,email,fecha,Sintomas].includes('')){
      setError(true)
      return
    }

    setError(false)

    //objetos de pacientes 
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      Sintomas,
    }

    if(paciente.id){
      //Editando registro
      objetoPaciente.id = paciente.id
      const PacienteActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(PacienteActualizados)
      setPaciente({})
    }else{
      objetoPaciente.id = generarid()
      setPacientes([...pacientes, objetoPaciente])
    }

    //reiniciar el formulario
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center text-indigo-400">Seguimiento Paciente</h2>
        <p className="text-lg text-center font-bold mt-4 mb-9">
          Añade Pacientes y {''}
          <span className="text-red-300">Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-9 px-4 mb-10">
          
          <div className="mb-5">
            <label htmlFor="Mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input id="Mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input id="Propietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="Correo" className="block text-gray-700 uppercase font-bold">Email</label>
            <input id="Correo" type="email" placeholder="Email contacto propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="FechaAlta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input id="FechaAlta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea id="Sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Sintomas" value={Sintomas} onChange={(e) => setSintomas(e.target.value)}/>
          </div>
          <input type="submit" className="bg-indigo-400 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-600 cursor-pointer transition-colors" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        </form>
    </div>
  )
}

export default Form