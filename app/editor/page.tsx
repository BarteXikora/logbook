import EditorTools from '@components/layout/editorTools/EditorTools'

import style from './page.module.scss'

const Editor = () => {
    return (
        <div className={style.editorContainer}>
            <EditorTools />
        </div>
    )
}

export default Editor