import Swal from "sweetalert2";

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
  error,
  setError,
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
    error && setError(false);
    setEdit(true);
    setEditPaciente(objetoPaciente);
  };

  //ELIMINANDO PACIENTE
  const handleEliminar = () => {
    Swal.fire({
      text: "¿Estás seguro de borrar este paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#47A6E6",
      cancelButtonColor: "#47A6E6",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      width: "400px",
      height: "400px",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminandoPaciente(id);
        Swal.fire({
          text: `El paciente ${nombre} ${apellido} ha sido eliminado!`,
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      }
    });
  };

  return (
    <div
      className={
        edit
          ? "bg-white brightness-75 shadow-md px-5 py-5 min-[800px]:px-10 lg:px-5 rounded-xl flex flex-col gap-1"
          : "bg-white shadow-md px-5 py-5 min-[800px]:px-10 rounded-xl lg:px-5 flex flex-col gap-"
      }
    >
      <div className="text-sm min-[1250px]:text-base bg-[#47A6E6] w-full py-1 uppercase font-bold rounded-md text-gray-800 text-center">
        Paciente Nro: {nro}
      </div>
      <div className="flex flex-col min-[470px]:flex-row lg:gap-2 mt-2">
        <p className="block text-gray-700 text- min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base font-bold w-full lg:w-1/2">
          Nombre:{" "}
          <span className="font-normal normal-case text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base">
            {nombre}
          </span>
        </p>
        <p className="block text-gray-700 text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base font-bold w-full lg:w-1/2">
          Apellido:{" "}
          <span className="font-normal normal-case text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base">
            {apellido}
          </span>
        </p>
      </div>
      <div className="flex gap-2 min-[470px]:gap-0 lg:gap-2">
        <p className="block text-gray-700 text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base font-bold max-w-[76%] min-[470px]:w-1/2 lg:w-auto min-[1250px]:w-1/2">
          Correo:{" "}
          <span className="font-normal normal-case text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base">
            {email}
          </span>
        </p>
        <p className="block text-gray-700 text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base font-bold w-auto min-[470px]::w-1/2 lg:w-auto min-[1250px]:w-1/2">
          Edad:{" "}
          <span className="font-normal normal-case text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base">
            {edad}
          </span>
        </p>
      </div>
      <div className="flex flex-col min-[470px]:flex-row lg:flex-col min-[1150px]:flex-row min-[1150px]:gap-2">
        <p className="block text-gray-700 text-sm min-[570px]:text-base min-[700px]:text-sm lg:text-sm min-[800px]:text-base min-[1250px]:text-base font-bold w-full min-[470px]:w-2/5 min-[900px]:w-1/2 lg:w-2/5 min-[1250px]:w-1/2">
          Teléfono:{" "}
          <span className="font-normal normal-case text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base">
            {telefono}
          </span>
        </p>
        <p className="block text-gray-700 text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base font-bold w-ful min-[470px]:w-3/5 min-[900px]:w-1/2 lg:w-3/5 min-[1250px]:w-1/2">
          Fecha Ingreso:{" "}
          <span className="font-normal normal-case text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base">
            {fecha}
          </span>
        </p>
      </div>
      <p className="block text-gray-700 text-sm min-[570px]:text-base lg:text-sm min-[1250px]:text-base font-bold mb-4">
        Sintomas:{" "}
        <span className="font-normal normal-case text-sm min-[570px]:text-base min-[700px]:text-sm min-[800px]:text-base lg:text-sm min-[1250px]:text-base">
          {sintomas}
        </span>
      </p>
      {!edit ? (
        <div className="flex gap-5 items-center justify-center">
          <button
            type="button"
            className="py-1 px-4 bg-[#47A6E6] hover:bg-[#2F74A2] text-gray-800 hover:text-white rounded-full text-sm font-bold transition-colors shadow-md shadow-gray-400"
            onClick={() => EditarPaciente()}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-1 px-4 bg-[#47A6E6] hover:bg-red-600 text-gray-800 hover:text-white rounded-full text-sm font-bold transition-colors shadow-md shadow-gray-400"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      ) : (
        id === editPaciente.id && (
          <div className="text-sm sm:text-base lg:text-sm min-[1250px]:text-base w-full flex items-center justify-center rounded-lg font-bold text-red-500">
            <p>¡Editando este paciente!</p>
          </div>
        )
      )}
    </div>
  );
}
