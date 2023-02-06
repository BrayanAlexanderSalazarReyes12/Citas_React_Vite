import Swal from "sweetalert2"

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, email, fecha, Sintomas, id } = paciente
    const handleEliminar = () =>{
        Swal.fire({
            title: 'Deseas eliminar este paciente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!',
            cancelButtonText: 'cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Eliminado!',
                'Paciente '+nombre,
                'success'
                )
                eliminarPaciente(id)
            }
        })
        //const respuesta = confirm('Deseas eliminar este paciente?')
        //if(respuesta){
        //    eliminarPaciente(id)
        //}
    }
  return (
    <div className="m-3 bg-white shadow-md px-4 py-9 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case">{Sintomas}</span>
        </p>
        <div className="flex justify-between mt-5">
            <button type="button" className="py-2 px-10 bg-indigo-400 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg transition-colors" onClick={() => setPaciente(paciente)}>Editar</button>
            <button type="button" className="py-2 px-10 bg-red-400 hover:bg-red-500 text-white font-bold uppercase rounded-lg transition-colors" onClick={handleEliminar}>Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
