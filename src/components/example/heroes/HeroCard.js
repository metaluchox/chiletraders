import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <>
            
                <Col sm>
                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`../../assets/heroes/${id}.jpg`} />
                        <Card.Body>
                            <Card.Title>{superhero}</Card.Title>
                            <Card.Text>
                                {alter_ego}
                            </Card.Text>
                            <Button className="justify-content-end" 
                                    variant="primary" 
                                    as={Link} 
                                    to={ `/heroes/${id}` } 
                                    block >Mas...</Button>
                        </Card.Body>
                    </Card>
                </Col>
            
        </>
    )
}
