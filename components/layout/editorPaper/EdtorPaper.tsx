'use client'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@store/store'
import { addElement, editElement, removeElement } from '@store/editorSlice/editorSlice'
import ElementProps from './element/element.types'

import DatePill from './datePill/DatePill'
import Element from './element/Element'
import style from './editorPaper.module.scss'

const EdtorPaper = () => {
    const dispatch = useDispatch()
    const { date, content } = useSelector((state: RootState) => state)

    const [focusNext, setFocusNext] = useState<boolean>(false)

    useEffect(() => {
        if (focusNext) {
            const focusableElements = Array.from(document.querySelectorAll('div')) as HTMLElement[]
            const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)

            if (currentIndex >= 0 && currentIndex < focusableElements.length) {
                const nextElement = focusableElements[currentIndex + 1]
                nextElement.focus()
            }

            setFocusNext(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content])

    const handleSetValue = (elementN: number, value: string) => {
        if (!('content' in content[elementN])) return

        dispatch(editElement({ elementN, newValue: { ...content[elementN], content: value } }))
    }

    const handleNextElement = (position: number) => {
        setFocusNext(true)
        dispatch(addElement(position))
    }

    const handleRemoveElement = (position: number) => {
        if (position === 0) return

        dispatch(removeElement(position))
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
                                state: { value: element.content, setValue: (value: string) => handleSetValue(n, value) },
                                nextElement: () => handleNextElement(n),
                                removeElement: () => handleRemoveElement(n)
                            }

                        else
                            elementProps = { ...element, nextElement: () => handleNextElement(n), removeElement: () => handleNextElement(n) }

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