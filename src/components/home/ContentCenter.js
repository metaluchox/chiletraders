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
      <div className="tableTema">
        <table className="table table-sm table-striped table-hover border rounded small">
          <thead>
            <tr>
              <th scope="col" colSpan="2">Temas de Discusión</th>
              <th scope="col">Usuario</th>
              <th scope="col">Comentarios</th>
              <th scope="col" colSpan="2">Fecha creacion</th>              
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
                <td colSpan="5" className="text-center">Sin Información</td>
              </tr>
            }

          </tbody>
        </table>
        </div>
      </>
    )
}
