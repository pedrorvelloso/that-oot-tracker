import React from 'react'

import songs from '../../../items/songs'

import IconCheck from '../../../components/IconCheck'

import { Container } from './styles'

const Songs: React.FC = () => {
  return (
    <Container>
      {songs.map(song => <IconCheck src={song.image} key={song.name} />)}
    </Container>
  )
}

export default Songs
