import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DsScreen } from '../components/example/dc/DsScreen'
import { HeroScreen } from '../components/example/heroes/HeroScreen'
import { MavelScreen } from '../components/example/marvel/MavelScreen'
import { SearchScreen } from '../components/example/search/SearchScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { Footer } from '../components/ui/Footer'
import { NavBar } from '../components/ui/NavBar'

export const HomeRouter = () => {
    return (
        <>
        <NavBar />
        <br />
                    <Switch>
                        <Route exact path="/home" component={HomeScreen} />
                        <Route exact path="/marvel" component={MavelScreen} />
                        <Route exact path="/heroes/:heroeId" component={HeroScreen} />
                        <Route exact path="/dc" component={DsScreen} />
                        <Route exact path="/search" component={SearchScreen} />
                        <Redirect to="/home" />
                    </Switch>  
        <br />        
        <Footer />
        </>
    )
}
