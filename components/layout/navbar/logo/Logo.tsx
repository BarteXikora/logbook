'use client'

import { useRouter } from 'next/navigation'
import Button from '@components/ui/button/Button'
import style from './logo.module.scss'

const Logo = () => {
    const router = useRouter()

    const handleClick = () => router.push('/')

    return (
        <div className={style.logo}>
            <Button text='' $icon='/img/logo.svg' $variant='sec' $size='big' onClick={handleClick} />
        </div>
    )
}

export default Logo