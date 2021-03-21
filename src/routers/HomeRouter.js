import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DsScreen } from '../components/example/dc/DsScreen'
import { HeroScreen } from '../components/example/heroes/HeroScreen'
import { MavelScreen } from '../components/example/marvel/MavelScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { Footer } from '../components/ui/Footer'
import { NavBar } from '../components/ui/NavBar'

export const HomeRouter = () => {
    return (
        <>
        <NavBar />
            <div className="album py-3 bg-light">
                    <Switch>
                        <Route exact path="/home" component={HomeScreen} />

                        <Route exact path="/marvel" component={MavelScreen} />
                        <Route exact path="/heroes/heroeId" component={HeroScreen} />
                        <Route exact path="/dc" component={DsScreen} />

                        <Redirect to="/home" />
                    </Switch>  
            </div>
        <Footer />
        </>
    )
}
