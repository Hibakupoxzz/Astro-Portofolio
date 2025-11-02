import React from 'react'
import Wave from 'react-wavify'

export default function WaveReact() {
  return (
    <Wave
      fill="#7cacf5"
      paused={false}
      style={{ display: 'flex' }}
      options={{
        height: 1,
        amplitude: 30, 
        speed: 0.15,
        points: 4
      }}
    />
  )
}
