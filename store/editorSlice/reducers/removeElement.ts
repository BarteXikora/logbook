import { PayloadAction } from '@reduxjs/toolkit'
import EditorState from '../editorSlice.types'

const removeElement = (state: EditorState, action: PayloadAction<number>) => {
    if (action.payload === 0) return

    state.content.splice(action.payload, 1)
}

export default removeElement