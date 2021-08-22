import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import './app.scss'
import Navbar from 'components/Navbar';
import routes from 'configs/routes';

function App() {

    return (
        <div className="App">

            <BrowserRouter>
                {/* <Navbar /> */}
                <div className="container">
                    <Switch>
                        {
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
                        }
                        <Route render={()=> <h1>404</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
