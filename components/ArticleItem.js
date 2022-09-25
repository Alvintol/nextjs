import articleStyles from '../styles/Article.module.css';
import Link from 'next/link';

const ArticleItem = ({ article }) => {

  const { card } = articleStyles;
  const { id, title, body, excerpt } = article;
  
  return (
    <Link href='/article/[id]' as={`/article/${id}`}>
      <a className={card}>
        <h3>{title} &rarr;</h3>
        <p>{excerpt}</p>
      </a>
    </Link>
  )
};

export default ArticleItem