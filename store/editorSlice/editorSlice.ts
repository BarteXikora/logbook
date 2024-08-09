import { createSlice } from '@reduxjs/toolkit'
import initialState from './editorSliceInitialState'

import editElementReducer from './reducers/editElement'

const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        editElement: editElementReducer
    }
})

export default editorSlice.reducer
export const { editElement } = editorSlice.actions