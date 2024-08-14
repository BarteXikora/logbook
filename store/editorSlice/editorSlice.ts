import { createSlice } from '@reduxjs/toolkit'
import initialState from './editorSliceInitialState'

import addElementReducer from './reducers/addElement'
import editElementReducer from './reducers/editElement'
import removeElementReducer from './reducers/removeElement'

const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        addElement: addElementReducer,
        editElement: editElementReducer,
        removeElement: removeElementReducer
    }
})

export default editorSlice.reducer
export const { addElement, editElement, removeElement } = editorSlice.actions