import { FocusEvent } from 'react'
import ElementProps from './element.types'
import style from './element.module.scss'

const Element = (element: ElementProps) => {
    const { type } = element

    if (type === 'separator') return (
        <div className={style.elementInput}><hr className={style.separator} /></div>
    )

    // TEMPORARY:
    if (type === 'quote') return <>quote</>
    //

    const { state, alignment } = element

    const handleBlur = (e: FocusEvent) => {
        const relatedTarget = e.relatedTarget as HTMLElement
        const currentTarget = e.currentTarget as HTMLElement

        if (relatedTarget && relatedTarget.dataset.donotblur) {
            e.preventDefault()
            currentTarget.focus()
        }

        state.setValue(e.currentTarget.innerHTML)
    }

    return (
        <div
            contentEditable suppressContentEditableWarning
            className={`${style.elementInput} ${style['elementType-' + type]} ${style['elementAlign-' + alignment]}`}
            onBlur={handleBlur}
            dangerouslySetInnerHTML={{ __html: state.value }}
        />
    )
}

export default Element