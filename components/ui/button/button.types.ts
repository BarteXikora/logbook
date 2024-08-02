import { MouseEvent } from 'react'

export type ButtonType = 'button' | 'reset' | 'submit' | undefined

export type ButtonVariant = 'prim' | 'sec' | 'good' | 'warn' | 'wrong'

export type ButtonSize = 'def' | 'big'

interface Button {
    text: string
    $variant?: ButtonVariant
    $size?: ButtonSize
    $icon?: string
    $showArrow?: boolean
    type?: ButtonType
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export default Button