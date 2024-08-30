import EditorState from './editorSlice.types'

const editorSliceInitialState: EditorState = {
    date: '9 sierpnia 2024',
    content: [{ type: 'h1', content: 'Lorem ipsum dolor.', alignment: 'left' }]
}

export default editorSliceInitialState