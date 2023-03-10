import React from "react";

export default function Error({ msj }) {
  return (
    <div className="bg-transparent rounded-lg font-semibold md:font-bold py-1  text-xs md:text-base text-center text-red-500">
      <p>{msj}</p>
    </div>
  );
}
