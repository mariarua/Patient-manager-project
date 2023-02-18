import { useEffect } from "react";
import React from "react";
import Patient from "./Patient";

function PatientList({ patients, setPatient, deletePatient }) {
  useEffect(() => {
    if (patients.length > 0) {
      console.log("paciente");
    }
  }, [patients]);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen h-screen overflow-y-scroll mx-3 my-10">
      {patients && patients.length ? (
        <>
          <h2 className="text-stone-600 text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-stone-600 text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-pink-500 font-bold">Paciente y citas</span>
          </p>
          {patients.map((patient) => {
            return (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-stone-600 text-3xl text-center">
            Aun no hay pacientes :c
          </h2>
          <p className="text-stone-600 text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-pink-500 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default PatientList;
