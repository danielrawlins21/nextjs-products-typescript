import React, { NextPage } from 'next'

import {ApplicationWrapper} from '../components/layout/ApplicationWrapper'

type HomeProps = {
  response: string
}

const Home: NextPage<HomeProps> = () => {

  return (
    
      
  <ApplicationWrapper title="Home" description='Home of the rootlab movies website'>
    <div className="grow flex flex-col justify-center items-center bg-[url('/images/home-bg.jpg')]">
      <div className='grow bg-black w-full justify-center items-center flex opacity-20'>
        <h1 className='text-5xl font-bold underline'>
          Welcome to the Rootlab | Rootstack
        </h1>
      </div>
    </div> 
    
      
  </ApplicationWrapper>

      
    
  )
}

export default Home


