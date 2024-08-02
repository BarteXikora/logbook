import { MouseEvent } from 'react'

export type ButtonVariant = 'prim' | 'sec'

export type ButtonSize = 'def' | 'big'

interface Button {
    text: string
    $variant?: ButtonVariant
    $size?: ButtonSize
    $icon?: string
    $showArrow?: boolean
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export default Button