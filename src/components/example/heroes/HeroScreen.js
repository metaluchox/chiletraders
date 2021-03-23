import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../selectors/getHeroById';
import { Button } from 'react-bootstrap';

export const HeroScreen = ( { history } ) => {

    const { heroeId } = useParams();
    const hero = useMemo(()=>getHeroById(heroeId), [heroeId])

    const regresar = ()=>{
       history.goBack();
    }
    
    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters 
    } = hero;



    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img src={`../../assets/heroes/${id}.jpg`} 
                    alt={superhero}
                    className="img-thumbnail"/>

            </div>
           <div className="col-8">
               <h3>{superhero}</h3>
                <li className="list-group-item"><b>publisher :</b> {publisher}</li>
                <li className="list-group-item"><b>alter_ego :</b> {alter_ego}</li>
                <li className="list-group-item"><b>characters :</b> {characters}</li>
                <li className="list-group-item"><b>first_appearance :</b> {first_appearance}</li>
           </div>
           <Button variant="outline-secondary" size="sm" block onClick={regresar}>
                    Regresar
            </Button>           
           
        </div>
    )
}
