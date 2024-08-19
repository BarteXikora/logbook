import { PayloadAction } from '@reduxjs/toolkit'
import EditorState, { Element, EditElement } from '../editorSlice.types'

const separatorRegExp = new RegExp('^-{3,15}$')

const editElement = (state: EditorState, action: PayloadAction<EditElement>) => {
    if (action.payload.elementN >= state.content.length) return

    let newValue: Element = action.payload.newValue
    if (newValue.type === 'text' && separatorRegExp.test(newValue.content))
        newValue = { type: 'separator' }

    state.content[action.payload.elementN] = newValue
}

export default editElement