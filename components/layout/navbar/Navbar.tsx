import Link from 'next/link'
import Button from '@components/ui/button/Button'

import Logo from './logo/Logo'
import Navigation from './navigation/Navigation'

import style from './navbar.module.scss'

const Navbar = () => {
    return (
        <header className={style.navbar}>
            <Logo />

            <Navigation />
        </header>
    )
}

export default Navbar