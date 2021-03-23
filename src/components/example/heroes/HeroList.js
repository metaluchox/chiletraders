import React, { useMemo } from 'react'
import { getHeroByPublishers } from '../selectors/getHeroByPublishers';
import { HeroCard } from './HeroCard';
import { Container, Row } from 'react-bootstrap';

export const HeroList = ({publisher}) => {

const heroes = useMemo( () => getHeroByPublishers(publisher), [publisher] );

    return (
        <>
       
        <Container className="animate__animated animate__fadeInLeft">
            <Row>
           { heroes.map(hero =>(
              <HeroCard key={hero.id} {...hero} />
           )) }
           </Row>
        </Container>

        </>
    )
}
