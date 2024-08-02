'use client'

import { useState, useEffect } from 'react'
import ButtonProps from './button.types'
import style from './button.module.scss'

import Image from 'next/image'

const Button = ({ text, $icon, $showArrow, onClick, $variant, $size }: ButtonProps) => {
    const getBtnClasses = () => {
        let newClasses = style.btn

        switch ($variant) {
            case 'sec': newClasses += ' ' + style.btnSec; break
            case 'good': newClasses += ' ' + style.btnGood; break
            case 'warn': newClasses += ' ' + style.btnWarn; break
            case 'wrong': newClasses += ' ' + style.btnWrong
        }

        if ($size === 'big') newClasses += ' ' + style.btnBig

        return newClasses
    }

    const [btnClasses, setBtnClasses] = useState<string>(getBtnClasses())

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setBtnClasses(getBtnClasses()), [$variant, $size])

    return (
        <button className={btnClasses} onClick={onClick}>
            {
                $icon && <Image src={$icon} width={25} height={25} alt='Ikona przycisku' />
            }

            {text}

            {
                $showArrow && <Image src='/icons/arrow-down.svg' width={25} height={25} alt='Rozwiń...' />
            }
        </button>
    )
}

export default Button