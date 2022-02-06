import Head from 'next/head'
import Container from '@mui/material/Container'
import { GetStaticProps } from 'next'
import {Post} from "../interface/Post";

export default function Home({post}) {
  const items = post;
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div>
            {items.map((el : Post) => {
              return (
                <div key={el.id}>
                  {el.id}
                  {el.body}
                  </div>
              )
            })}
          </div>
      </main>
    </Container>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const post : Post[] = await res.json();

  if(!post){
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}