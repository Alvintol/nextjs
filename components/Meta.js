import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=devide-width, initial-scale=1' />
      <meta name='keywords' content={keywords}/>
      <meta name='description' content={description}/>
      <meta charSet='utf-8' />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
};

Meta.defaultProps = {
  title: 'NextJS App',
  keywords: 'web development, programming',
  description: 'First NextJS deployed app'
};

export default Meta;
