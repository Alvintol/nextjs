import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Webdev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.jason();

  return {
    props: {
      articles
    }
  }
};

export default Home;