import { Element as StoredElement, Quote, Separator } from '@store/editorSlice/editorSlice.types'

export type ElementState = { value: string, setValue: (value: string) => void }

type ReplaceContentWithSate<T> = T extends { content: string } ? Omit<T, 'content'> & { state: ElementState } : T

type Additional = {
    nextElement: () => void
    removeElement: () => void
}

type Element = ReplaceContentWithSate<StoredElement> & Additional

export default Element

export type TextElement = Exclude<Element, Quote | Separator>