import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Login from './components/login';
import MomentForm from './components/momentForm';
import Feed from './components/feed';
import Menu from './components/menu';
import SkeletonFeedCard from './components/skeletonFeedCard';
import UserProfile from './components/userProfile';
import Story from './components/story';

function App() {
    return (
        <div className='App bg-gray-100 min-h-screen'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route
                    path='/view/:userId/moment/:momentId'
                    component={Story}
                />
                <Route
                    path='/:currentUserId/profile/:userId'
                    component={UserProfile}
                />
                <Route path='/user/:userId/moments' component={MomentForm} />
                <Route path='/user/:userId/feed' component={Feed} />
                <Route path='/user/:userId' component={Profile} />
                <Route path='/login' component={Login} />
                <Route path='/test' component={SkeletonFeedCard} />
            </Switch>
        </div>
    );
}

export default App;
