import { useState, useEffect } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import PatientList from "./Components/PatientList";

export default function App() {
  //ESTADOS LOCALES
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? [] //CARCARGAR LOS PACIENTES DEL LOCAL STORAGE
  );
  const [countPatiens, setCountPatients] = useState(0);
  const [editPaciente, setEditPaciente] = useState({});
  const [edit, setEdit] = useState(false);
  const [nroPatien, setNroPatient] = useState(
    JSON.parse(localStorage.getItem("nroDePaciente")) ?? 0 //CARGAR LOS EL NUMERO TOTAL DE PACIENTES
  );
  const [error, setError] = useState(false);

  //AGREGAR PACIENTE EN EL LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    localStorage.setItem("nroDePaciente", JSON.stringify(nroPatien));
  }, [pacientes, nroPatien]);

  //NUMERACION DE PACIENTES POR DIA
  const nroPaciente = () => {
    setNroPatient(nroPatien + 1);
    return nroPatien + 1;
  };

  //ELIMINANDO UN PACIENTE
  const eliminandoPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  return (
    <div className="h-screen px-5">
      <Header />
      <div className="h-auto lg:h-screen min-[1300px]:h-[85%] flex flex-col lg:flex-row gap-5 w-full bg-[#237fd9] py-5 md:px-16 min-[700px]:px-20 lg:px-20 lg:py-4 rounded-t-2xl">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          countPatiens={countPatiens}
          setCountPatients={setCountPatients}
          editPaciente={editPaciente}
          setEditPaciente={setEditPaciente}
          edit={edit}
          setEdit={setEdit}
          nroPaciente={nroPaciente}
          nroPatien={nroPatien}
          error={error}
          setError={setError}
        />
        <PatientList
          pacientes={pacientes}
          setEditPaciente={setEditPaciente}
          edit={edit}
          setEdit={setEdit}
          editPaciente={editPaciente}
          eliminandoPaciente={eliminandoPaciente}
          nroPatien={nroPatien}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  );
}
