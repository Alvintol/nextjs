import Head from 'next/head'

const Home = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Webdev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      
    </div>
  )
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
};

export default Home;