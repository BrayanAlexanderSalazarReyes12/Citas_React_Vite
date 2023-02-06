import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-red-300">Listado Pacientes</h2>
          <p className="font-bold text-xl text-center mt-4 mb-9">
            Administra tus {''}
            <span className="text-indigo-400">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen overflow-y-scroll scrollbar-hide">
            {pacientes.map( paciente => (
              <Paciente 
                key={paciente.id}
                paciente = {paciente}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
              /> 
            ))}   
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-red-300">No Hay Pacientes</h2>
          <p className="font-bold text-xl text-center mt-4 mb-9">
            Comienza agregando pacientes {''}
            <span className="text-indigo-400">y aparecerán en este lugar</span>
          </p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPacientes
