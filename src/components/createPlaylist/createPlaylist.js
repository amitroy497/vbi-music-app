import React, { useState, useEffect } from 'react'
import './createPlaylist.css'
import loading from './../../assets/images/loading.gif'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ClickHere from './../../assets/images/ClickHere.gif'
import { songsUrl } from './../../url'

const CreatePlaylist = ({ onClose }) => {
  const [songs, setSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  let obj = {}
  var obj2 = {}
  const getSongs = async () => {
    setIsLoading(true)
    var songsFromStorage = await localStorage.getItem('songsList')
    if (songsFromStorage) {
      songsFromStorage = JSON.parse(songsFromStorage)
      setSongs(songsFromStorage)
      setIsLoading(false)
    } else {
      await fetch(songsUrl).then((result) => {
        result.json().then((resp) => {
          setSongs(resp)
          if (typeof Storage !== 'undefined') {
            localStorage.setItem('songsList', JSON.stringify(resp))
          }
        })
      })
    }
  }

  const anyCheckbox = () => {
    var inputElements = document.querySelectorAll('.playlistCheckBox')
    for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
        return true
      }
    }
    return false
  }

  const addSongsToPlaylist = () => {
    var x
    x = document.querySelectorAll('.playlistCheckBox')
    for (let i = 0; i < x.length; i++) {
      if (x[i].checked) {
        let y = x[i].parentElement.parentElement.id
        songs.map((song) => {
          // eslint-disable-next-line eqeqeq
          if (y == song.id) {
            obj[i] = song.title
          }
          return obj[i]
        })
        onClose()
      }
    }

    if (!localStorage.getItem('count')) {
      if (anyCheckbox()) {
        localStorage.setItem('count', '1')
        localStorage.setItem('Playlist 1', JSON.stringify(obj))
        const date = new Date()
        obj2['Playlist1'] = [{ name: obj, date: date }]
        localStorage.setItem('MultiPlaylist', JSON.stringify(obj2))
      }
    } else {
      if (anyCheckbox()) {
        var counter = localStorage.getItem('count')
        counter = ++counter
        obj2 = JSON.parse(localStorage.getItem('MultiPlaylist'))
        const date = new Date()
        obj2['Playlist' + counter] = [{ name: obj, date: date }]
        localStorage.setItem('count', counter)
        localStorage.setItem(`Playlist ${counter}`, JSON.stringify(obj))
        localStorage.setItem('MultiPlaylist', JSON.stringify(obj2))
      }
    }
  }

  useEffect(() => {
    getSongs()
  }, [])

  return (
    <div className='createPlaylistPopUpWrapper'>
      <div className='createPlaylistPopUpTitle'>Create Playlist</div>
      <>
        {!isLoading ? (
          <div className='createPlaylistPopUpSection'>
            <table>
              <thead>
                <tr>
                  <td className='popUpSongName'>Song Name</td>
                  <td className='popUpCheck'>Add Songs</td>
                </tr>
              </thead>
              <tbody>
                {songs.map((song) => (
                  <tr key={song.id} id={song.id}>
                    <td className='popUpSongName'>{song.title}</td>
                    <td className='popUpCheck'>
                      <input type='checkbox' className='playlistCheckBox' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='addToPlaylist' title='Add to playlist'>
              <img src={ClickHere} alt='click-here' />
              <AddCircleOutlineIcon onClick={addSongsToPlaylist} />
            </div>
          </div>
        ) : (
          <div className='loadingIcon'>
            <img src={loading} alt='loading' />
          </div>
        )}
      </>
    </div>
  )
}

export default CreatePlaylist
