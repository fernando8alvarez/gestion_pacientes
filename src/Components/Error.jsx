import React from "react";

export default function Error({ msj }) {
  return (
    <div className="bg-red-500 rounded-lg font-bold py-1 uppercase text-sm text-center text-white">
      <p>{msj}</p>
    </div>
  );
}
