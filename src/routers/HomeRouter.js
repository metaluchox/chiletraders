import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HomeScreen } from '../components/home/HomeScreen'
import { ListarTemaScreen } from '../components/temas/ListarTemaScreen'
import { CrearTemaScreen } from '../components/temas/CrearTemaScreen'
import { MiPerfilScreen } from '../components/perfil/MiPerfilScreen'

import { Footer } from '../components/ui/Footer'
import { NavBar } from '../components/ui/NavBar'
import { TemaScreen } from '../components/temas/TemaScreen'

export const HomeRouter = () => {

    

    return (
        <>
        <NavBar />
        <br />
                    <Switch>
                        <Route exact path="/home" component={HomeScreen} />
                        <Route exact path="/listarTema" component={ListarTemaScreen} />
                        <Route exact path="/crearTema" component={CrearTemaScreen} />
                        <Route exact path="/miPerfil/:id" component={MiPerfilScreen} />
                        <Route exact path="/tema" component={TemaScreen} />
                        <Redirect to="/home" />
                    </Switch>  
        <br />        
        <Footer />
        </>
    )
}
