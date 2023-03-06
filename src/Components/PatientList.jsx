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
}) {
  return (
    <>
      {pacientes && pacientes.length ? (
        <div className="w-full lg:w-1/2 px-5 lg:px-0 flex flex-col gap-5">
          <div className="flex items-center justify-center bg-white shadow-md rounded-lg px-6 py-3">
            <div className="w-3/5">
              <h2 className="font-black text-3xl text-center">
                Listado de Pacientes
              </h2>
              <p className="text-lg mt-2 text-center">
                Visualización de Pacientes y {""}
                <span className="font-bold text-[#47A6E6]">Citas</span>
              </p>
            </div>
            <div className="w-2/5 flex items-center gap-4 justify-center">
              <div className="flex flex-col justify-center">
                <h2 className="font-black text-2xl text-center">Total hoy</h2>
                <span className="font-bold text-xl text-center text-[#47A6E6]">
                  {nroPatien}
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-black text-2xl text-center">Cantidad</h2>
                <span className="font-bold text-xl text-center text-[#47A6E6]">
                  {pacientes.length}
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 flex flex-col gap-5 md:h-screen md:overflow-y-scroll">
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
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-1/2 px-5 lg:px-0 flex flex-col gap-5">
          <div className="flex items-center justify-center bg-white shadow-md rounded-lg px-6 py-3">
            <div className="w-3/5">
              <h2 className="font-black text-3xl text-center">
                No Hay Pacientes
              </h2>
              <p className="text-lg mt-2 text-center">
                Los pacientes se agregaran {""}
                <span className="font-bold text-[#47A6E6]"> en este lugar</span>
              </p>
            </div>
            <div className="w-2/5 flex items-center gap-4 justify-center">
              <div className="flex flex-col justify-center">
                <h2 className="font-black text-2xl text-center">Total hoy</h2>
                <span className="font-bold text-xl text-center text-red-500">
                  {nroPatien}
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-black text-2xl text-center">Cantidad</h2>
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
