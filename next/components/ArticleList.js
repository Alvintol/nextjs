import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {

  const { grid } = articleStyles;

  return (
    <div className={grid}>
      {articles.map(article =>
        <ArticleItem
          article={article}
        />
      )}
    </div>
  )
};

export default ArticleList;