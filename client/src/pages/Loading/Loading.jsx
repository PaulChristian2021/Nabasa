import React from 'react'
import { Grid } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex flexCenter' style={{position: 'absolute', top: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(34, 34, 34, 0.33)'}}>
        <Grid color="#DF6747" height={100} width={100} />
    </div>
  )
}

export default Loading