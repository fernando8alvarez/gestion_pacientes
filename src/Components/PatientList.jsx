import { useState } from "react";
import Patient from "./Patient";

export default function PatientList({
  pacientes,
  setEditPaciente,
  edit,
  setEdit,
  editPaciente,
  eliminandoPaciente,
  nroPatien,
  error,
  setError
}) {
  return (
    <>
      {pacientes && pacientes.length ? (
        <div className="w-full lg:w-1/2 px-5 md:px-12 lg:px-0 flex flex-col gap-5">
          <div className="flex flex-col min-[900px]:flex-row items-center justify-center bg-white shadow-md rounded-lg p-3 gap-3 ">
            <div className="w-full lg:w-3/5">
              <h2 className="font-black text-xl md:2xl min-[900px]:text-2xl lg:text-xl text-center">
                Listado de Pacientes
              </h2>
              <p className="text-sm md:text-base min-[900px]:text-base lg:text-sm text-center">
                (Visualización de Pacientes y {""}
                <span className="font-bold text-[#47A6E6]">Citas</span>)
              </p>
            </div>
            <div className="w-full lg:w-2/5 flex lg:flex-col items-center gap-5 lg:gap-0 justify-center">
              <div className="flex  gap-3 items-center justify-center">
                <h2 className="font-black text-base md:text-lg min-[900px]:text-xl lg:text-base">Total hoy</h2>
                <span className="font-bold text-base md:text-lg min-[900px]:text-xl lg:text-base text-[#47A6E6]">
                  {nroPatien}
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <h2 className="font-black text-base md:text-lg min-[900px]:text-xl lg:text-base">Cantidad</h2>
                <span className="font-bold text-base md:text-lg min-[900px]:text-xl lg:text-base text-[#47A6E6]">
                  {pacientes.length}
                </span>
              </div>
            </div>
          </div>
          <div className="pr-2 flex flex-col gap-5 h-[560px] overflow-y-scroll">
            {pacientes.map((paciente) => (
              <Patient
                key={paciente.id}
                id={paciente.id}
                nro={paciente.nro}
                nombre={paciente.nombre}
                apellido={paciente.apellido}
                email={paciente.email}
                edad={paciente.edad}
                telefono={paciente.telefono}
                fecha={paciente.fecha}
                sintomas={paciente.sintomas}
                setEditPaciente={setEditPaciente}
                edit={edit}
                setEdit={setEdit}
                editPaciente={editPaciente}
                eliminandoPaciente={eliminandoPaciente}
                error={error}
          setError={setError}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-1/2 px-5 md:px-12 lg:px-0 flex flex-col gap-3">
          <div className="flex flex-col min-[900px]:flex-row items-center justify-center bg-white shadow-md rounded-lg p-2 gap-3">
            <div className="w-full lg:w-[70%]">
              <h2 className="font-black text-xl md:2xl min-[900px]:text-2xl lg:text-xl text-center">
                No Hay Pacientes
              </h2>
              <p className="text-sm md:text-base min-[900px]:text-base lg:text-sm text-center">
                (Los pacientes se agregaran {""}
                <span className="font-bold text-[#47A6E6]"> en este lugar</span>)
              </p>
            </div>
            <div className="w-full lg:w-[30%] flex lg:flex-col gap-4 lg:gap-0 items-center justify-center">
              <div className="flex gap-4 lg:gap-3 justify-center">
                <h2 className="font-black text-base md:text-lg min-[900px]:text-xl lg:text-base">Total hoy</h2>
                <span className="font-bold text-xl text-center text-red-500">
                  {nroPatien}
                </span>
              </div>
              <div className="flex gap-4 justify-center">
                <h2 className="font-black text-base md:text-lg min-[900px]:text-xl lg:text-base text-center">Cantidad</h2>
                <span className="font-bold text-xl text-center text-red-500">
                  {pacientes.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
