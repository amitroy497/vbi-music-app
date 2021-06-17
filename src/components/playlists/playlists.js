import React from 'react'
import './playlists.css'
import PlaylistModal from '../playlistModal/playlistModal'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ListOfPlaylist from './listOfPlaylist'
const Playlists = () => {
  return (
    <div className='playListsWrapper'>
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
      <div className='songMenuWrapper'>
        <Link to='/display' className='allSongs'>
          All Songs
        </Link>
        <div className='playlists'>Playlists</div>
      </div>
      <div className='playListSection'>
        <ListOfPlaylist />
        <PlaylistModal />
      </div>
    </div>
  )
}

export default Playlists
