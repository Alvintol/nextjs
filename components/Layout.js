import Nav from './Nav';
import Header from './Header';
import Meta from './Meta';
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {

  const { container, main } = styles;

  return (
    <>
    <Meta />
      <Nav />
      <div className={container}>
        <main className={main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;