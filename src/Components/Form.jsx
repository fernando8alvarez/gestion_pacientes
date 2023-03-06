import { useState, useEffect } from "react";
import Error from "./Error";
import { idGenerate, toUpperString } from "./Utility";

export default function Form({
  pacientes,
  setPacientes,
  countPatiens,
  setCountPatients,
  editPaciente,
  setEditPaciente,
  edit,
  setEdit,
  nroPaciente,
}) {
  //ESTADOS LOCALES
  const [paciente, setPaciente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    edad: "",
    telefono: "",
    fecha: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(editPaciente).length > 0) {
      setPaciente({
        nombre: editPaciente.nombre,
        apellido: editPaciente.apellido,
        email: editPaciente.email,
        edad: editPaciente.edad,
        telefono: editPaciente.telefono,
        fecha: editPaciente.fecha,
        sintomas: editPaciente.sintomas,
      });
    }
  }, [editPaciente]);

  //MANEJO DE INPUTS
  const handleChange = (e) => {
    const inputs = ["nombre", "apellido", "sintomas"];
    setError(false);

    if (inputs.includes(e.target.name)) {
      setPaciente({
        ...paciente,
        [e.target.name]: toUpperString(e.target.value),
      });
    } else if (e.target.name === "email") {
      setPaciente({
        ...paciente,
        [e.target.name]: e.target.value.toLowerCase(),
      });
    } else {
      setPaciente({
        ...paciente,
        [e.target.name]: e.target.value,
      });
    }
  };

  //ENVIO DE FORMULARIOS
  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellido, email, edad, telefono, fecha } = paciente;

    if ([nombre, apellido, email, edad, telefono, fecha].includes("")) {
      console.log("La mayoria de los campos requeridos estan vacios");
      setError(true);
      return;
    } else if (editPaciente.id) {
      //EDITAR PACIENTE

      paciente.id = editPaciente.id;
      paciente.nro = editPaciente.nro;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === editPaciente.id ? paciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setEditPaciente({});
      edit && setEdit(false);
    } else {
      //AGREGAR NUEVO PACIENTE
      paciente.id = idGenerate();
      //AGREGAR NRO DE IDENTIFICACION DE PACIENTE
      paciente.nro = nroPaciente();
      setPacientes([...pacientes, paciente]);
      //CONTADOR DE PACIENTES
      setCountPatients(countPatiens + 1);
    }
    //REINICIAR EL FOPRMULARIO
    setPaciente({
      nombre: "",
      apellido: "",
      email: "",
      edad: "",
      telefono: "",
      fecha: "",
      sintomas: "",
    });
  };

  const handleReset = () => {
    if (pacientes.length > 0) {
      const respuesta = confirm(
        "Esta seguro que desea reiniciar el sistema? se borraran todos los pacientes de la lista"
      );
      respuesta && localStorage.clear();
      location.reload();
    }
  };

  return (
    <>
      <div className="w-full lg:w-1/2 px-5 lg:px-0 flex flex-col gap-5">
        <div className="bg-white flex shadow-md rounded-lg py-3">
          <div className={pacientes.length > 0 ? "w-3/5" : "w-full"}>
            <h2 className="font-black text-3xl text-center">
              Registrar Pacientes
            </h2>
            <p className="text-lg mt-2 text-center">
              Añade Pacientes y {""}
              <span className="font-bold text-[#47A6E6]">Administralos</span>
            </p>
          </div>
          {pacientes.length > 0 && (
            <div className="flex flex-col gap-2 items-center justify-center w-2/5">
              <h2 className="font-black text-xl text-center">
                Reiniciar sistema
              </h2>
              <button
                type="button"
                className="w-fit  px-4 bg-[#47A6E6] hover:bg-red-600 text-gray-800 hover:text-white rounded-full text-base font-bold transition-colors shadow-md shadow-gray-400"
                onClick={() => handleReset()}
              >
                Reestablecer
              </button>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white shadow-md rounded-lg py-10 px-10 flex flex-col gap-5"
        >
          {error && <Error msj="¡Estos campos son requeridos!" />}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block text-gray-700 uppercase font-bold"
              >
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="name"
                placeholder="Nombre del paciente..."
                className={
                  error
                    ? "border-2 border-red-500 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                }
                value={paciente.nombre}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastname"
                className="block text-gray-700 uppercase font-bold"
              >
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                id="lastname"
                placeholder="Apellido del paciente..."
                className={
                  error
                    ? "border-2 border-red-500 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                }
                value={paciente.apellido}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-4/6">
              <label
                htmlFor="Email"
                className="block text-gray-700 uppercase font-bold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="Correo del paciente..."
                className={
                  error
                    ? "border-2 border-red-500 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                }
                value={paciente.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-auto">
              <label
                htmlFor="edad"
                className="block text-gray-700 uppercase font-bold"
              >
                Edad
              </label>
              <input
                type="text"
                name="edad"
                id="edad"
                placeholder="Edad del paciente..."
                className={
                  error
                    ? "border-2 border-red-500 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                }
                value={paciente.edad}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-4/6">
              <label
                htmlFor="tlf"
                className="block text-gray-700 uppercase font-bold"
              >
                Teléfono
              </label>
              <input
                type="text"
                name="telefono"
                id="tlf"
                placeholder="Teléfono del paciente o representante..."
                className={
                  error
                    ? "border-2 border-red-500 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                }
                value={paciente.telefono}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-auto">
              <label
                htmlFor="dateInput"
                className="block text-gray-700 uppercase font-bold"
              >
                Fecha de ingreso
              </label>
              <input
                type="datetime-local"
                name="fecha"
                id="dateInput"
                className={
                  error
                    ? "border-2 border-red-500 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                }
                value={paciente.fecha}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="symptoms"
              className="block text-gray-700 uppercase font-bold"
            >
              Sintomas
            </label>
            <textarea
              name="sintomas"
              id="symptoms"
              className="border-2 w-full h-28 p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
              placeholder="Describe los síntomas..."
              value={paciente.sintomas}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input
            type="submit"
            className="bg-[#47A6E6] w-full p-3 uppercase font-bold rounded-md cursor-pointer transition-colors shadow-md shadow-gray-400  hover:bg-[#2F74A2] text-gray-800 hover:text-white"
            value={editPaciente.id ? "Editar paciente" : "Agregar pacientes"}
          />
        </form>
      </div>
    </>
  );
}
