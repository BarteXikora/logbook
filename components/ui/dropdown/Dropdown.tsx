'use client'

import { useState, MouseEvent } from 'react'
import useClickOutside from '@hooks/useClickOutside/useClickOutside'
import Button from '../button/Button'

import DropdownProps from './dropdown.types'
import style from './dropdown.module.scss'

const Dropdown = ({ button, content, className }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const clickOutsideRef = useClickOutside(() => setIsOpen(false))

    const overrideOnClick = (event: MouseEvent<HTMLButtonElement>) => {
        setIsOpen(!isOpen)

        button.onClick && button.onClick(event)
    }

    return (
        <div ref={clickOutsideRef} className={`${style.dropdownContainer} ${className}`}>
            <Button
                {...button}
                onClick={overrideOnClick}
                $showArrow={button.$showArrow === undefined ? true : button.$showArrow}
            />

            {
                isOpen && <div className={style.dropdownContent}>{content}</div>
            }
        </div>
    )
}

export default Dropdown