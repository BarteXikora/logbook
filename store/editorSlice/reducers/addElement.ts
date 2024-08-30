import { PayloadAction } from '@reduxjs/toolkit'
import EditorState, { EditElement } from '../editorSlice.types'

const addElement = (state: EditorState, action: PayloadAction<number>) => {
    console.log(action.payload)
    state.content.splice(action.payload + 1, 0, { type: 'text', content: '', alignment: 'left' })
}

export default addElement