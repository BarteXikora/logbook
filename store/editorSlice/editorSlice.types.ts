export type ElementAlignment = 'left' | 'center' | 'right' | 'justify'

type EditableElement = {
    content: string
    alignment: ElementAlignment
}

export type HeadingOne = { type: 'h1' } & EditableElement

export type HeadingTwo = { type: 'h2' } & EditableElement

export type HeadingThree = { type: 'h3' } & EditableElement

export type Paragraph = { type: 'text' } & EditableElement

export type Quote = { type: 'quote', logID: string, elementNth: number }

export type Separator = { type: 'separator' }

export type Element = HeadingOne | HeadingTwo | HeadingThree | Paragraph | Quote | Separator

interface EditorState {
    date: string
    content: Element[]
}

export default EditorState

export type EditElement = {
    elementN: number
    newValue: Element
}