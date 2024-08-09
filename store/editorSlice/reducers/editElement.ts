import { PayloadAction } from '@reduxjs/toolkit'
import EditorState, { EditElement } from '../editorSlice.types'

const editElement = (state: EditorState, action: PayloadAction<EditElement>) => {
    console.log('action', action.payload.newValue)

    if (action.payload.elementN >= state.content.length) return

    state.content[action.payload.elementN] = action.payload.newValue
}

export default editElement