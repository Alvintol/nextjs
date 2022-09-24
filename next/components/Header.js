import headerStyle from '../styles/Header.module.css'

const Header = () => {

  const { title, description } = headerStyle;
  return (
    <div>
      <h1 className={title}>
        <span>NextJS</span> Project
      </h1>
      <p className={description}>
        Deploying my first NextJS Project with basic fundamental coverage
      </p>
    </div>
  )
};

export default Header