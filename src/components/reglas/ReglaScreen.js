import React from 'react'
import { Link } from 'react-router-dom';

export const ReglasScreen = () => {
    return (
        <>
            <div className="container">
                <div>
                    <Link to="/" >
                        <img id="logo" src="../../assets/image/chiletraderslogoStandar.png"
                            width="100%"
                            alt="Chile Traders"
                        />
                    </Link>
                    <hr />
                </div>

                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">Reglas de los foros</h4>
                    <p>

                        <li>
                            En Chile Traders están todos invitados a participar, solo exigimos ser responsables con lo que se escribe, respetuoso con todas las opiniones y mantener siempre el foco en el tema de las acciones.
                        </li>
                        <br/>
                        <li>
                            No se aceptarán: Mensajes o comentarios que agredan a otras personas o que sean carentes de respeto, mensajes con vocabulario inapropiado, mensajes escritos con fines publicitarios, mensajes con contenido ilegal, comentarios que atenten contra las buenas costumbres generalmente aceptadas, o cualquier mensaje que atente con la legislación vigente. Tampoco se aceptarán nombres de usuarios que coincidan con personajes de relevancia pública.
                        </li>
                        <br/>
                        <li>
                            Los comentarios son responsabilidad de quien los escribe y en Chile Traders no nos hacemos responsables de su veracidad ni exactitud y tampoco del uso que se le de a esta información.
                        </li>
                        <br/>
                        <li>
                            Nos reservamos el derecho a borrar comentarios que no cumplan con estas reglas y que no contribuyan al objetivo del foro. Por favor, no nos pregunten por que razón borramos mensajes, mas bien ustedes enfoquense en respetar las reglas.
                        </li>
                        <br/>
                        <li>
                            Nos reservamos el derecho de admisión, para lograr el objetivo del foro, discusión seria de temas financieros.
                        </li>
                        <br/>
                        <li>
                            Así como también, nos reservamos el derecho de expulsar a todo quien no respete todo lo mencionado anteriormente. Por otra parte, todo aquel que mantenga mas de un nombre de usuario en este foro, también será expulsado.
                        </li>
                        <br/>
                        <li>
                            Dejaremos la opción de calificar con positivas o negativas, solo a usuarios mas antiguos y que escriben o aportan, constantemente en el foro. En la medida que veamos que los nuevos empiezan a aportar, también podrán calificar.
                        </li>
                        <br/>
                        <li>
                            Si alguien quiere ser un usuario nuevo con derecho a comentar en Chile Traders, y ya no ser solo un invitado, deberá envíarnos un email a contacto@Chile Traders.com con su solicitud de registro de nuevo usuario. Verificaremos su email, luego confirmaremos su completa identidad, para así asegurarnos de que no sea un spam y que sea alguien, que llegará a este increíble foro, a respetar cada una de las reglas anteriormente señaladas.
                        </li>
                    </p>
                </div>
                <br />

                <div className="d-grid gap-2">
                    <Link className="btn btn-outline-primary" to="/" >Volver</Link>
                </div>
            </div>

        </>
    )
}
