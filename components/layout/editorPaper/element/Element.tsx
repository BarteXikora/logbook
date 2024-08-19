import ElementProps from './element.types'
import TextElement from './textElement/TextElement'
import style from './element.module.scss'

const Element = (element: ElementProps) => {
    const { type } = element

    if (type === 'separator') return (
        <div className={style.elementInput}><hr className={style.separator} /></div>
    )

    // TEMPORARY:
    if (type === 'quote') return <>quote</>
    //

    return <TextElement {...element} />
}

export default Element