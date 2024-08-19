'use client'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@store/store'
import { addElement, editElement, removeElement } from '@store/editorSlice/editorSlice'
import ElementProps from './element/element.types'

import DatePill from './datePill/DatePill'
import Element from './element/Element'
import style from './editorPaper.module.scss'
import useManageSelection from '@hooks/useManageSelection/useManageSelection'

const EdtorPaper = () => {
    const dispatch = useDispatch()
    const { date, content } = useSelector((state: RootState) => state)

    const { add, remove } = useManageSelection(content)

    const handleSetValue = (elementN: number, value: string) => {
        if (!('content' in content[elementN])) return

        dispatch(editElement({ elementN, newValue: { ...content[elementN], content: value } }))
    }

    const handleNextElement = (position: number) => {
        dispatch(addElement(position))
        add(position)
    }

    const handleRemoveElement = (position: number) => {
        if (position === 0) return

        dispatch(removeElement(position))
        remove(position)
    }

    return (
        <div className={style.editorPaperContainer}>
            <main className={style.editorPaper}>
                <DatePill date={date} />

                <div className="editor-page">
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
                                elementProps = { ...element, nextElement: () => handleNextElement(n), removeElement: () => handleRemoveElement(n) }

                            return (
                                <Element key={n} {...elementProps} />
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default EdtorPaper