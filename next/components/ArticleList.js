import articleStyles from '../styles/Article.module.css';

const ArticleList = ({ articles }) => {

  const { grid } = articleStyles;

  return (
    <div className={grid}>
      {articles.map(article =>
        <h3>{article.title}</h3>
      )}
    </div>
  )
};

export default ArticleList;