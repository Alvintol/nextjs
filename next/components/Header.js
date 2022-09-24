import headerStyle from '../styles/Header.module.css'

const Header = () => {

  const { title, description } = headerStyle;
  return (
    <div>
      <h1 className={title}>
        <span>WebDev</span> News
      </h1>
      <p className={description}>
        Keep up to date with the latest Web Dev news
      </p>
    </div>
  )
};

export default Header