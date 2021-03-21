import React from 'react'
import { getHeroByPublishers } from '../selectors/getHeroByPublishers';
import { HeroCard } from './HeroCard';
import { Container, Row } from 'react-bootstrap';

export const HeroList = ({publisher}) => {

const heroes = getHeroByPublishers(publisher);

    return (
        
        <Container>
            <Row>
           { heroes.map(hero =>(
              <HeroCard key={hero.id} {...hero} />
           )) }
           </Row>
        </Container>
    )
}
