import EditorTools from '@components/layout/editorTools/EditorTools'
import EditorPaper from '@components/layout/editorPaper/EditorPaper'

import style from './page.module.scss'

const Editor = () => {
    return (
        <>
            <div className={style.editorToolsContainer}>
                <EditorTools />
            </div>

            <div className={style.editorPaperContainer}>
                <EditorPaper />
            </div>
        </>
    )
}

export default Editor