import { useRef, useEffect } from 'react'
import { Element } from '@store/editorSlice/editorSlice.types'

const useManageSelection = (content: Element[]) => {
    const move = useRef<number | null>(null)

    useEffect(() => {
        if (move.current == null) return

        const focusableElements = Array.from(document.querySelectorAll('.editor-page div')) as HTMLElement[]
        focusableElements[move.current].focus()

        move.current = null

    }, [content])

    const add = (index: number) => move.current = index + 1
    const remove = (index: number) => move.current = index - 1

    return { add, remove }
}

export default useManageSelection