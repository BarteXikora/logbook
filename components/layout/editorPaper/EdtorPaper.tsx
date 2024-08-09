'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@store/store'
import { editElement } from '@store/editorSlice/editorSlice'
import ElementProps from './element/element.types'

import DatePill from './datePill/DatePill'
import Element from './element/Element'
import style from './editorPaper.module.scss'

const EdtorPaper = () => {
    const dispatch = useDispatch()
    const { date, content } = useSelector((state: RootState) => state)

    const handleSetValue = (elementN: number, value: string) => {
        if (!('content' in content[elementN])) return

        dispatch(editElement({ elementN, newValue: { ...content[elementN], content: value } }))
    }

    return (
        <div className={style.editorPaperContainer}>
            <main className={style.editorPaper}>
                <DatePill date={date} />

                {
                    content.map((element, n) => {
                        let elementProps: ElementProps

                        if ('content' in element)
                            elementProps = {
                                ...element,
                                state: { value: element.content, setValue: (value: string) => handleSetValue(n, value) }
                            }

                        else elementProps = { ...element }

                        return (
                            <Element key={n} {...elementProps} />
                        )
                    })
                }
            </main>
        </div>
    )
}

export default EdtorPaper