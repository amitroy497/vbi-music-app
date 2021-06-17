import React, { useState } from 'react'
import { useEffect } from 'react'

const ListOfPlaylist = () => {
  const [playlists, setPlaylists] = useState([])

  const getPlaylists = async () => {
    let obj = await JSON.parse(localStorage.getItem('MultiPlaylist'))
    setPlaylists(Object.keys(obj))
  }

  useEffect(() => {
    getPlaylists()
  }, [])

  return (
    <div>
      {playlists.map((playlist) => (
        <div>{playlist}</div>
      ))}
    </div>
  )
}

export default ListOfPlaylist
