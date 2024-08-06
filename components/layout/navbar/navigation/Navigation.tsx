import Link from 'next/link'
import Button from '@components/ui/button/Button'
import style from './navigation.module.scss'

const navLinks = [
    { path: '/', label: 'Pulpit' },
    { path: '/', label: 'Kalendarz' },
    { path: '/', label: 'Wpisy' }
]

const Navigation = () => {
    // Temporary:
    const __isAddedToday = false
    const __userName = 'Użytkownik'

    return (
        <nav className={style.navigation}>
            <div className={style.hamburgerBtn}>
                <Button text='' $icon='/icons/hamburger.svg' $size='big' />
            </div>

            <div className={style.navLinks}>
                {
                    navLinks.map(link => <Link key={link.path} href={link.path}>{link.label}</Link>)
                }

                {
                    !__isAddedToday && <Button $variant='sec' text='Dodaj dzisiejszy wpis' />
                }
            </div>

            <div className={style.userBtn}>
                <Button $variant='sec' text={__userName} $icon='/icons/user.svg' $size='big' $showArrow />
            </div>
        </nav>
    )
}

export default Navigation