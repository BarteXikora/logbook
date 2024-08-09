import { createSlice } from '@reduxjs/toolkit'
import initialState from './editorSliceInitialState'

const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {}
})

export default editorSlice.reducer
export const { } = editorSlice.actions