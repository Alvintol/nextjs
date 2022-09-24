import { useRouter } from 'next/dist/client/router';


const article = ({ article }) => {
  // const router = useRouter();
  // const {id} = router.query;

  const { id } = article;

  return (
    <>
    This is article #{id}
    </>
  )
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

export default article;
