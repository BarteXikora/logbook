import { ReactNode } from 'react'
import Button from '../button/button.types'

interface Dropdown {
    button: Button
    content: ReactNode
    className?: string
}

export default Dropdown