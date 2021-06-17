import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Music from './../../assets/images/Music.gif'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const Home = () => {
  return (
    <div className='homeWrapper'>
      <img src={Music} alt='music' className='musicBackground' />
      <h1 className='welcome-title'>Welcome</h1>
      <h1 className='to-title'>To</h1>
      <h1 className='vbi-title'>VBI</h1>
      <h1 className='music-title'>Music</h1>
      <h1 className='app-title'>App</h1>
      <div className='goToNextPage'>
        Click on next to continue{' '}
        <Link to='/display' className='next' title='Next'>
          <NavigateNextIcon className='homeNextIcon' />
        </Link>
      </div>
    </div>
  )
}

export default Home
