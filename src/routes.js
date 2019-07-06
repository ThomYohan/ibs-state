import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Landing from './Components/Landing/Landing'
import Portfolio from './Components/Portfolio/Portfolio'
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'


export default (
    <HashRouter>
        <Nav />
        <Switch>
            <Route path='/' component={Landing} exact />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/team' component={Team} />
            <Route path='/contact' component={Contact}  />
        </Switch>
    </HashRouter>
)