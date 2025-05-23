import React from 'react'
import './Cita.css'

export default function Cita({cita}) {
  return (
    <div>
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button className="button eliminar u-full-width">Eliminar ×</button>
        </div>
    </div>
  )
}
