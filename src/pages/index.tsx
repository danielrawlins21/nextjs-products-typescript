import React, { NextPage } from 'next'

import {ApplicationWrapper} from '../components/layout/ApplicationWrapper'

type HomeProps = {
  response: string
}

const Home: NextPage<HomeProps> = () => {

  return (
    
      
  <ApplicationWrapper title="Home" description='Home of the rootlab movies website'>
    <div className='grow flex justify-center items-center'>
    <h1 className='text-5xl font-bold underline'>Welcome to the Rootlab | Rootstack</h1>
    </div>   
  </ApplicationWrapper>

      
    
  )
}

export default Home


