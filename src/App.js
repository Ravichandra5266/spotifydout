import { Switch , Route } from "react-router-dom/cjs/react-router-dom.min";

import LoginPage from './components/LoginPage'

import Home from './components/Home'

import Profile from './components/Profile'

import YourMusic from './components/YourMusic'

import Playlists from './components/Playlists'

import "./App.css";

const App = () => (
    <Switch>
        <Route exact path = '/login' component = {LoginPage}/>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/profile' component = {Profile}/>
        <Route exact path = '/yourmusic' component = {YourMusic}/>
        <Route exact path = '/playlists' component = {Playlists}/>

    </Switch>
)
export default App;
