import Image from 'next/image'
import Link from 'next/link'
import Button from '@components/ui/button/Button'

import style from './navbar.module.scss'

const Navbar = () => {
    return (
        <header className={style.navbar}>
            <div className={style.navigation}>
                <div className={style.logo}>
                    <Button text='' $icon='/img/logo.svg' $variant='sec' $size='big' />
                </div>

                <nav>
                    <Link href='/'>Pulpit</Link>
                    <Link href='/'>Kalendarz</Link>
                    <Link href='/'>Wpisy</Link>
                </nav>
            </div>

            <div className={style.btnUser}>
                <Button $variant='sec' text='Nazwa użytkownika' $icon='/icons/user.svg' $size='big' $showArrow />
            </div>
        </header>
    )
}

export default Navbar