import { useRef, useState, useEffect, FocusEvent, KeyboardEvent } from 'react'
import { TextElement as TextElementProps } from '../element.types'
import style from '../element.module.scss'

const TextElement = (element: TextElementProps) => {
    const { type, state, alignment } = element

    const divRef = useRef<HTMLDivElement>(null)
    const [hasFocus, setHasFocus] = useState(false)

    useEffect(() => {
        if (!divRef.current || !hasFocus) return

        const range = document.createRange()
        range.selectNodeContents(divRef.current)
        range.collapse(false)

        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)

    }, [hasFocus])

    const handleBlur = (e: FocusEvent) => {
        const relatedTarget = e.relatedTarget as HTMLElement
        const currentTarget = e.currentTarget as HTMLElement

        if (relatedTarget && relatedTarget.dataset.donotblur) {
            e.preventDefault()
            currentTarget.focus()
        }

        state.setValue(e.currentTarget.innerHTML)
    }

    const handleKey = (e: KeyboardEvent) => {
        if (!e.shiftKey && e.key === 'Enter') {
            e.preventDefault()

            state.setValue(e.currentTarget.innerHTML)
            element.nextElement()

        } else if (e.key === 'Backspace' && e.currentTarget.innerHTML === '') {
            e.preventDefault()
            element.removeElement()

        }
    }
    return (
        <div
            ref={divRef}
            contentEditable suppressContentEditableWarning
            className={`${style.elementInput} ${style['elementType-' + type]} ${style['elementAlign-' + alignment]}`}
            onFocus={() => setHasFocus(true)}
            onBlur={e => { handleBlur(e); setHasFocus(false) }}
            onKeyDown={handleKey}
            dangerouslySetInnerHTML={{ __html: state.value }}
        />
    )
}

export default TextElement