import { createSlice } from '@reduxjs/toolkit'
import initialState from './editorSliceInitialState'

import addElementReducer from './reducers/addElement'
import editElementReducer from './reducers/editElement'

const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        addElement: addElementReducer,
        editElement: editElementReducer
    }
})

export default editorSlice.reducer
export const { addElement, editElement } = editorSlice.actions