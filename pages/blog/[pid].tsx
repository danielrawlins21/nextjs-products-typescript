import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react'

type PostProps = {
  post: string
}

const Post: NextPage<PostProps> = ({ post }) => {
/*
  const router = useRouter()
  const { pid } = router.query

  useEffect(() => {
    //fetch del producto usando el id como clave primaria
  },[pid])
*/
  return (
    <div className=''>
      <Head>
        <title>Post - RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the Rootlab | Rootstack - Post {post}
        </h1>

        <p className=''>
          <code className=''>Post: &quot;{post}&quot;</code>
        </p>
      </main>

      <footer className=''>
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className=''>
            Rootstack
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Post

export async function getServerSideProps({ query }) {
  //console.log(query)
  const post = query.pid

  //const post = fetch(`products/${query.pid}`)

  return {
    props: {
      post
    }
  }
}

