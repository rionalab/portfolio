import React, {useEffect,useLayoutEffect,useState} from 'react'
import Home from './Home';
import {default as FakeStore } from 'apps/fake_store'
import {default as PokemonSearch } from 'apps/pokemon_search'
import {default as Others } from 'apps/others/index'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './app.scss'
import Navbar from 'components/Navbar';

type withChildren<T={}> = T & { children ?:React.ReactNode}

type Props = {
    counter?: string,
    children: React.ReactNode
} & withChildren;

const Something = ({ children }:Props) => {
    return <div>{children}</div>
}

function App() {

    return (
        <div className="App">

            <BrowserRouter>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/fake-store" component={FakeStore} />
                        <Route path="/pokemon-search" component={PokemonSearch} />
                        <Route path="/others" component={Others} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
