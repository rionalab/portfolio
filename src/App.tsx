import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import './app.scss'
import Navbar from 'components/Navbar';
import routes from 'configs/routes';

import Home from './Home';
import Tirtagracia from 'apps/tirtagracia/Tirtagracia'

import {default as FakeStore } from 'apps/fake_store'
import {default as PokemonSearch } from 'apps/pokemon_search'
import {default as TodoContextReducerTS } from 'apps/todo_context_ts'
import {default as BookDetail } from 'apps/book/BookDetail'
import {default as Others } from 'apps/others/index'

function App() {

    return (
        <div className="App">

            <BrowserRouter>
                {/* <Navbar /> */}
                <div className="container">
                    <Switch>
                        {/* {
                            routes.map( (route, routeIndex) => (
                                <Route
                                    key={routeIndex}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(props:RouteComponentProps<any>)=>
                                        <route.component {...props} />
                                    }
                                />
                            ))
                        } */}
                        <Route path="/fake-store" component={FakeStore} />
                        <Route path="/pokemon-search" component={PokemonSearch} />
                        <Route path="/todo-context-reducer-typescript" component={TodoContextReducerTS} />
                        <Route path="/tirtagracia" component={Tirtagracia} />
                        <Route path="/others" component={Others} />
                        <Route path="/" exact={true} component={Home} />
                        <Route render={()=> <h1>404</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
