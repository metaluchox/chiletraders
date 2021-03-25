import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from './getHeroByName';


export const SearchScreen = ( {history} ) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    const [formValues, handleInputChange] = useForm ({
        searchText : q
    });

    const { searchText } = formValues;
    const heroesFilter = useMemo(() => getHeroByName(q), [q])

    const searchButton = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)

    }

    return (
        <>
            <div>
                <h1>Buscardor de Heroes</h1>
            </div>
            <div>
                <form className="row g-3" onSubmit={searchButton}>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="searchText"
                        placeholder="Encuentra la infor que deseas" 
                        value={ searchText } 
                        autoComplete="off"
                        onChange={ handleInputChange }/>
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">
                            Buscar...
                        </button>                        
                </form>
            </div>


            <div className="row mt-5 animate__animated animate__fadeInLeft">
                <h3>Resultado</h3>
                <hr />
                
                { (q !== '' && heroesFilter.length === 0) &&
                    <div className="alert alert-danger" role="alert">
                        <h3 className="text-center">
                            Heroe <strong>{ q }</strong> no encontrado :( 
                        </h3>
                    </div> 
                }

                <div>
                {
                    heroesFilter.map(hero =>
                        <HeroCard
                            key={hero.id}
                            {...hero} />
                    )
                }
                </div>             
            </div>

        </>
    )
}
