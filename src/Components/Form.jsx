import { useState, useEffect } from "react";
import Error from "./Error";
import { idGenerate, toUpperString } from "./Utility";
import Swal from "sweetalert2";

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
  nroPatien,
  error,
  setError,
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
      Swal.fire({
        text: `El paciente se ha sido editado correctamente!`,
        width: "400px",
        height: "400px",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      //AGREGAR NUEVO PACIENTE
      paciente.id = idGenerate();
      //AGREGAR NRO DE IDENTIFICACION DE PACIENTE
      paciente.nro = nroPaciente();
      setPacientes([...pacientes, paciente]);
      //CONTADOR DE PACIENTES
      setCountPatients(countPatiens + 1);
      Swal.fire({
        text: `El paciente se ha agreagado a la lista correctamente`,
        width: "400px",
        height: "400px",
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
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
    if (pacientes.length > 0 || nroPatien > 0) {
      Swal.fire({
        text: "¿Estás seguro de resetear el sistema?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#47A6E6",
        cancelButtonColor: "#47A6E6",
        confirmButtonText: "Reiniciar",
        cancelButtonText: "Cancelar",
        width: "400px",
        height: "400px",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          location.reload();
          Swal.fire({
            text: `El sistema se ha reestablecido`,
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            width: "400px",
            height: "400px",
          });
        }
      });
    }
  };

  return (
    <>
      <div className="w-full lg:w-1/2 px-5 md:px-12 lg:px-0 flex flex-col gap-5">
        <div className="bg-[#ECF1F6] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 shadow-md rounded-lg p-3">
          <div
            className={
              pacientes.length > 0 || nroPatien > 0 ? "lg:w-auto" : "w-full"
            }
          >
            <h2 className="font-bold text-xl md:2xl min-[900px]:text-2xl lg:text-xl text-center text-[#31353D]">
              Registrar Pacientes
            </h2>
            <p className="text-sm md:text-base min-[900px]:text-base lg:text-sm text-center font-bold text-[#237fd9]">
              Añade Pacientes y Administralos
            </p>
          </div>
          {(pacientes.length > 0 || nroPatien > 0) && (
            <div className="flex sm:flex-col gap-2 sm:gap-0 min-[900px]:gap-1 items-center justify-center lg:w-auto">
              <h2 className="font-bold text-base md:text-lg min-[900px]:text-xl lg:text-base text-center text-[#31353D]">
                Reiniciar Sistema
              </h2>
              <button
                type="button"
                className="w-fit px-4 py-0.5 bg-[#237fd9] hover:bg-red-500 text-gray-800 hover:text-[#ECF1F6] rounded-full text-sm md:text-base min-[900px]:text-md lg:text-xs font-bold transition-colors shadow-sm lg:shadow-md shadow-gray-400 text-[#ECF1F6]"
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
          className={
            error
              ? "bg-[#ECF1F6] shadow-md rounded-lg p-8 min-[920px]:p-16 lg:p-8 min-[1250px]:py-4 flex flex-col gap-2 lg:gap-3"
              : "bg-[#ECF1F6] shadow-md rounded-lg p-8 min-[920px]:p-16 lg:p-8 flex flex-col gap-2 lg:gap-3"
          }
        >
          {error && <Error msj="¡Estos campos son requeridos!" />}
          <div className="flex flex-col min-[520px]:flex-row gap-2 lg:gap-3">
            <div className="w-full min-[520px]:w-1/2">
              <label
                htmlFor="name"
                className="text-sm block text-[#31353D] uppercase font-bold"
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
                    ? "text-sm border-2 border-red-500 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "text-sm border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#237fd9] text-gray-700"
                }
                value={paciente.nombre}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full min-[520px]:w-1/2">
              <label
                htmlFor="lastname"
                className="text-sm block text-[#31353D] uppercase font-bold"
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
                    ? "text-sm border-2 border-red-500 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "text-sm border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#237fd9] text-gray-700"
                }
                value={paciente.apellido}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col min-[520px]:flex-row gap-2 lg:gap-3">
            <div className="w-full min-[520px]:w-4/6">
              <label
                htmlFor="Email"
                className="text-sm block text-[#31353D] uppercase font-bold"
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
                    ? "text-sm border-2 border-red-500 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "text-sm border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#237fd9] text-gray-700"
                }
                value={paciente.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full min-[520px]:w-2/6">
              <label
                htmlFor="edad"
                className="text-sm block text-[#31353D] uppercase font-bold"
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
                    ? "text-sm border-2 border-red-500 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "text-sm border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#237fd9] text-gray-700"
                }
                value={paciente.edad}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col min-[520px]:flex-row lg:flex-col min-[1260px]:flex-row gap-2 lg:gap-3">
            <div className="w-full min-[520px]:w-4/6 lg:w-full min-[1260px]:w-4/6 ">
              <label
                htmlFor="tlf"
                className="text-sm block text-[#31353D] uppercase font-bold"
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
                    ? "text-sm border-2 border-red-500 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "text-sm border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#237fd9] text-gray-700"
                }
                value={paciente.telefono}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full min-[520px]:w-2/6 lg:w-full min-[1260px]:w-2/6 ">
              <label
                htmlFor="dateInput"
                className="text-sm block text-[#31353D] uppercase font-bold"
              >
                Fecha de ingreso
              </label>
              <input
                type="datetime-local"
                name="fecha"
                id="dateInput"
                className={
                  error
                    ? "text-sm border-2 border-red-500 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#47A6E6] text-gray-700"
                    : "text-sm border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#237fd9] text-gray-700"
                }
                value={paciente.fecha}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="symptoms"
              className="text-sm block text-[#31353D] uppercase font-bold"
            >
              motivo o Sintomas
            </label>
            <textarea
              name="sintomas"
              id="symptoms"
              className="text-sm border-2 w-full h-24 p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:border-[#237fd9] text-gray-700"
              placeholder="Describe el motivo o los síntomas..."
              value={paciente.sintomas}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input
            type="submit"
            className="bg-[#237fd9] text-sm lg:text-base w-full p-2 mt-2 uppercase font-bold rounded-md cursor-pointer transition-colors shadow-md shadow-gray-400 hover:bg-[#063970] text-[#ECF1F6] hover:text-[#ECF1F6]"
            value={editPaciente.id ? "Editar paciente" : "Agregar pacientes"}
          />
        </form>
      </div>
    </>
  );
}
