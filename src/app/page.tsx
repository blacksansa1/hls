"use client"

import ReactPlayer from 'react-player'

export default function Home() {
  return (
    <ReactPlayer 
    url='http://evpp.mm.uol.com.br:1935/band_live/terraviva/playlist.m3u8?'
    playing={true}
    width='100%'
    height='100%' />
  )
}
