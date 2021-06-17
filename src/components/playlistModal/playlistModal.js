import React, { useState } from 'react'
import './playlistModal.css'
import Modal from './modal'
import CreatePlaylist from './../createPlaylist/createPlaylist'

function PlaylistModal() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button className='createPlaylistBtn' onClick={() => setIsOpen(true)}>
        Create Playlist
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <CreatePlaylist onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}

export default PlaylistModal
