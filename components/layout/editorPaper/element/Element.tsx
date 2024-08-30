import ElementProps from './element.types'
import Separator from './separator/Separator'
import TextElement from './textElement/TextElement'
import style from './element.module.scss'

const Element = (element: ElementProps) => {
    const { type } = element

    if (type === 'separator') return <Separator {...element} />

    // TEMPORARY:
    if (type === 'quote') return <>quote</>
    //

    return <TextElement {...element} />
}

export default Element