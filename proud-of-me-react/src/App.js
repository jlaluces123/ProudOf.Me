import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Login from './components/login';
import MomentForm from './components/momentForm';

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/user/:userId/moments' component={MomentForm} />
                <Route path='/user/:userId' component={Profile} />
                <Route path='/login' component={Login} />
            </Switch>
        </div>
    );
}

export default App;
