import Link from 'next/link'
import Button from '@components/ui/button/Button'

import Logo from './logo/Logo'

import style from './navbar.module.scss'

const Navbar = () => {
    const __isAddedToday = false

    return (
        <header className={style.navbar}>
            <Logo />

            <nav className={style.navigation}>
                <div className={style.hamburgerBtn}>
                    <Button text='' $icon='/icons/hamburger.svg' $size='big' />
                </div>

                <div className={style.navLinks}>
                    <Link href='/'>Pulpit</Link>
                    <Link href='/'>Kalendarz</Link>
                    <Link href='/'>Wpisy</Link>

                    {
                        !__isAddedToday && <Button $variant='sec' text='Dodaj dzisiejszy wpis' />
                    }
                </div>

                <div className={style.userBtn}>
                    <Button $variant='sec' text='Nazwa użytkownika' $icon='/icons/user.svg' $size='big' $showArrow />
                </div>
            </nav>
        </header>
    )
}

export default Navbar