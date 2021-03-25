import React from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ContentLeft = () => {
    return (
        <>
        
      <p className="text-center"><strong>ARTÍCULOS DE OPINIÓN</strong></p>


  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Flash de mercado.
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>

      Fortrade enables you to buy and sell hundreds of global Shares online in a secure, 
      easy-to-use platform and mobile app. We offer outstanding educational tools online, 
      and a free demo account. Our Support Team is at your service 5-days a week, and our 
      daily and weekly analysis keep you abreast on the latest developments in the shares 
      that you are interested in trading.
    All of this and more at NBRB-regulated Fortrade.
    <img 
    alt="example" 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAynLzdLt4BOxJ8sFS0wqpKY-kuC_FhhNNiA&usqp=CAU"
    width="100%" />
    <Link to="/hola">Ver Mas... </Link>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Cronicas
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>

      Elon Musk, presidente de autos Tesla, de SpaceX y parte vital de una gran cantidad de innovadores proyectos,
        es sin duda una de las personas más influyentes en el mundo.
        Su nombre es sinónimo de tecnología, ya que decidió invertir 
        en el apasionante mundo de la exploración espacial con el objetivo no sólo de llegar a Marte, 
        sino de crear las condiciones necesarias para llevar una colonia humana al Planeta Rojo.
        <Link to="/hola">Ver Mas... </Link>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
          Bill Gates dice que el bitcoin es malo para el planeta, y tiene razón

      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        
          La criptomoneda "utiliza más electricidad por transacción que cualquier otro método conocido por la humanidad", afirma.
          <a href="https://www.esquire.com/es/tecnologia/a35727049/bill-gates-bitcoin-energia-medio-ambiente/" > Ver mas ...</a>


      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
          Articulos de opinión
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>   
<br />
<Button className="btn btn-danger" block> <i className="bi bi-mic-fill"></i> Crear Tema </Button>



        </>
    )
}
