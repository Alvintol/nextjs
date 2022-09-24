import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {

  const { nav } = navStyles;
  return (
    <nav className={nav}>
      <ul>
        <li>
          <Link href='/' >Home</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
