import React, { useState, useEffect } from 'react'
import './displaySongs.css'
import loading from './../../assets/images/loading.gif'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { songsUrl } from './../../url'

const DisplaySongs = () => {
  const [songs, setSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)

  const songsPerPage = 3
  const pagesVisited = pageNumber * songsPerPage

  const getSongs = async () => {
    setIsLoading(true)
    await fetch(songsUrl).then((result) => {
      result.json().then((resp) => {
        setSongs(resp)
        if (typeof Storage !== 'undefined') {
          localStorage.setItem('songsList', JSON.stringify(resp))
        }
      })
    })
    setIsLoading(false)
  }

  const showSongs = songs
    .slice(pagesVisited, pagesVisited + songsPerPage)
    .map((song) => (
      <div key={song.id} className='displaySongField'>
        <div className='displaySongNumber'>
          <label>Song No.</label>
          <span>{song.id}</span>
        </div>
        <div className='displaySongThumbnail'>
          <img src={song.thumbnailUrl} alt='thumbnail' />
        </div>
        <div className='displaySongDetails'>
          <div className='displayAlbumNumber'>
            <label>Album No.</label>
            <span>{song.albumId}</span>
          </div>
          <div className='displaySongTitle'>
            <label>Song Title</label>
            <span>{song.title}</span>
          </div>
        </div>
        <div className='displayPlayTime'>
          <label>Play Time</label>
          <span></span>
        </div>
      </div>
    ))

  useEffect(() => {
    getSongs()
  }, [])

  const pageCount = Math.ceil(songs.length / songsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className='displayWrapper'>
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
      <div className='songMenuWrapper'>
        <div to='/display' className='allSongs'>
          All Songs
        </div>
        <Link to='/playlists' className='playlists'>
          Playlists
        </Link>
      </div>
      <div className='displaySection'>
        {!isLoading ? (
          <div>
            {showSongs}{' '}
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBtns'}
              previousLinkClassName={'previousBtn'}
              nextLinkClassName={'nextBtn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
            />{' '}
          </div>
        ) : (
          <div className='loadingIcon'>
            <img src={loading} alt='loading' />
          </div>
        )}
      </div>
    </div>
  )
}

export default DisplaySongs
