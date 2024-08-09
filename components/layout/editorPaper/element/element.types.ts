export type ElementState = { value: string, setValue: (value: string) => void }

export type ElementAlignment = 'left' | 'center' | 'right' | 'justify'

type EditableElement = {
    state: ElementState
    alignment: ElementAlignment
}

export type HeadingOne = { type: 'h1' } & EditableElement

export type HeadingTwo = { type: 'h2' } & EditableElement

export type HeadingThree = { type: 'h3' } & EditableElement

export type Paragraph = { type: 'text' } & EditableElement

export type Quote = { type: 'quote', logID: string, elementNth: number }

export type Separator = { type: 'separator' }

type Element = HeadingOne | HeadingTwo | HeadingThree | Paragraph | Quote | Separator

export default Element