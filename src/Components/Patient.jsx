export default function Patient({
  id,
  nro,
  nombre,
  apellido,
  email,
  edad,
  telefono,
  fecha,
  sintomas,
  setEditPaciente,
  edit,
  setEdit,
  editPaciente,
  eliminandoPaciente,
}) {
  const objetoPaciente = {
    id,
    nro,
    nombre,
    apellido,
    email,
    edad,
    telefono,
    fecha,
    sintomas,
  };

  //EDITANDO PACIENTE
  const EditarPaciente = () => {
    setEdit(true);
    setEditPaciente(objetoPaciente);
  };

  //ELIMINANDO PACIENTE
  const handleEliminar = () => {
    const respuesta = confirm(`Deseas eliminar a este paciente? ${nombre} ${apellido}`);
    respuesta && eliminandoPaciente(id);
  };

  return (
    <div
      className={
        edit
          ? "bg-white brightness-75 shadow-md px-5 py-5 rounded-xl flex flex-col gap-2"
          : "bg-white shadow-md px-5 py-5 rounded-xl flex flex-col gap-2"
      }
    >
      <div className="bg-[#47A6E6] w-full py-1 uppercase font-bold rounded-md text-gray-800 text-center">
        Paciente Nro: {nro}
      </div>
      <div className="flex lg:gap-2">
        <p className="block text-gray-700 font-bold w-1/2">
          Nombre:{" "}
          <span className="font-normal normal-case text-md">{nombre}</span>
        </p>
        <p className="block text-gray-700 font-bold w-1/2">
          Apellido:{" "}
          <span className="font-normal normal-case text-md">{apellido}</span>
        </p>
      </div>
      <div className="flex lg:gap-2">
        <p className="block text-gray-700 font-bold w-3/5 md:w-1/2 lg:w-3/4 xl:w-1/2">
          Correo:{" "}
          <span className="font-normal normal-case text-md">{email}</span>
        </p>
        <p className="block text-gray-700 font-bold w-auto md:w-1/2 lg:w-auto xl:w-1/2">
          Edad: <span className="font-normal normal-case text-md">{edad}</span>
        </p>
      </div>
      <div className="flex lg:gap-2">
        <p className="block text-gray-700 font-bold w-1/2">
          Teléfono:{" "}
          <span className="font-normal normal-case text-md">{telefono}</span>
        </p>
        <p className="block text-gray-700 font-bold w-1/2">
          Fecha Ingreso:{" "}
          <span className="font-normal normal-case text-md">{fecha}</span>
        </p>
      </div>
      <p className="block text-gray-700 font-bold mt-4">
        Sintomas:{" "}
        <span className="font-normal normal-case text-md">{sintomas}</span>
      </p>
      {!edit ? (
        <div className="flex gap-5 items-center justify-center">
          <button
            type="button"
            className="py-1 px-4 bg-[#47A6E6] hover:bg-[#2F74A2] text-gray-800 hover:text-white rounded-full text-base font-bold transition-colors shadow-md shadow-gray-400"
            onClick={() => EditarPaciente()}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-1 px-4 bg-[#47A6E6] hover:bg-red-600 text-gray-800 hover:text-white rounded-full text-base font-bold transition-colors shadow-md shadow-gray-400"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      ) : (
        id === editPaciente.id && (
          <div className=" w-full flex items-center justify-center rounded-lg font-bold py-2  text-red-500">
            <p>¡Editando este paciente!</p>
          </div>
        )
      )}
    </div>
  );
}
