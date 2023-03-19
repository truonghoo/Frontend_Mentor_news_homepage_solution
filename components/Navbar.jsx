import Image from 'next/image'
import Link from 'next/link'
import s from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <Image src='/logo.svg' width={65 / 1.5} height={40 / 1.5} alt='Logo' />
        <Image
          src='/icon-menu.svg'
          className={s.menuBtn}
          width={40}
          height={17}
          alt='Menu Icon'
        />

        <ul className={s.navList}>
          <NavLink text='Home' href='/' />
          <NavLink text='New' href='/new' />
          <NavLink text='Popular' href='/popular' />
          <NavLink text='Trending' href='/trending' />
          <NavLink text='Categories' href='/categories' />
        </ul>
      </nav>
    </header>
  )
}

function NavLink({ text, href }) {
  return (
    <li className={s.navItem}>
      <Link href={href}>{text}</Link>
    </li>
  )
}
