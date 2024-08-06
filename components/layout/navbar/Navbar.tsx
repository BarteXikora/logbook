import Link from 'next/link'
import Button from '@components/ui/button/Button'

import style from './navbar.module.scss'

const Navbar = () => {
    return (
        <header className={style.navbar}>
            <div className={style.logo}>
                <Button text='' $icon='/img/logo.svg' $variant='sec' $size='big' />
            </div>

            <nav className={style.navigation}>
                <div className={style.hamburgerBtn}>
                    <Button text='' $icon='/icons/hamburger.svg' $size='big' />
                </div>

                <div className={style.navLinks}>
                    <Link href='/'>Pulpit</Link>
                    <Link href='/'>Kalendarz</Link>
                    <Link href='/'>Wpisy</Link>
                </div>

                <div className={style.userBtn}>
                    <Button $variant='sec' text='Nazwa użytkownika' $icon='/icons/user.svg' $size='big' $showArrow />
                </div>
            </nav>
        </header>
    )
}

export default Navbar