"use client"

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'

export default function VideoPlayer() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <ReactPlayer 
    url='http://evpp.mm.uol.com.br:1935/band_live/terraviva/playlist.m3u8?'
    playing={true}
    controls={true}
    loop={true}
    playsinline={true}
    volume={0.5}
    muted={true}
    onReady={(e) => {
      const player = e.getInternalPlayer();
      player.setAttribute('muted', true);
      setIsMuted(false)
    }}
    width='100%'
    height='100%' />
  )
}
