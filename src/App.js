import './App.css'
import Home from './components/home/home'
import DisplaySongs from './components/displaySongs/displaySongs'
import PageNotAvailable from './components/pageNotAvailable/pageNotAvailable'
import Playlists from './components/playlists/playlists'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='/display'>
            <DisplaySongs />
          </Route>
          <Route path='/playlists'>
            <Playlists />
          </Route>
          <Route path='*'>
            <PageNotAvailable />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
