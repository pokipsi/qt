import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import CardEdit from './views/CardEdit';
import CardAdd from './views/CardAdd';
import Cards from './views/Cards';

function App() {



    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/cards">
                        <Cards />
                    </Route>
                    <Route exact path="/cards/:id/edit" component={ CardEdit }></Route>
                    <Route exact path="/cards/add" component={ CardAdd }></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
