import { KeyboardEvent } from 'react'
import ElementProps from '../element.types'
import style from '../element.module.scss'

const Separator = (element: ElementProps) => {
    const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            element.nextElement()

        } else if (e.key === 'Backspace') {
            e.preventDefault()
            element.removeElement()
        }
    }

    return (
        <div
            className={style.elementInput}
            tabIndex={0}
            onKeyDown={handleKey}
        >
            <hr className={style.separator} />
        </div>
    )
}

export default Separator