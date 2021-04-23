import React from 'react'
import './ContentCenter.css'

import { useSelector } from 'react-redux';
import { TemasEntry } from '../temas/TemasEntry';

export const ContentCenter = () => {

    const temas = useSelector(state => state.tema);
    let objTemas = {};

    if (temas?.temas) {
      objTemas = Object.values(temas.temas);
    }
  
    const validInfoTema = Object.entries(objTemas).length === 0;    


    return (
      <>
        <table className="table table-sm table-striped table-hover border rounded" style={{cursor:"pointer"}} >
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Temas de Discusión</th>
              <th scope="col">Usuario</th>
              <th scope="col">Fecha creacion</th>
            </tr>
          </thead>
          <tbody>
            {

              !validInfoTema &&
              objTemas.map(t => (
                <TemasEntry
                  key={t.id}
                  {...t}
                />
              ))

            }

            {validInfoTema &&
              <tr>
                <td colSpan="4" className="text-center">Sin Información</td>
              </tr>
            }



          </tbody>
        </table>
      </>
    )
}
