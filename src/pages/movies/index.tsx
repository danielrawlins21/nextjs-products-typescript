import React, { NextPage } from 'next'

import {ApplicationWrapper} from '../../components/layout/ApplicationWrapper'

interface TProps  {
  response: string
}

const Movies: NextPage<TProps> = () => {

  return (
    
      
      <ApplicationWrapper title="Movies" description='Movies of the rootlab movies website'>
        <h1 className='text-4xl font-bold underline'>Movies | Rootstack</h1>
      </ApplicationWrapper>

      
    
  )
}

export default Movies


