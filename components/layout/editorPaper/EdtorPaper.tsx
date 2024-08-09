'use client'

import DatePill from './datePill/DatePill'

import style from './editorPaper.module.scss'

const EdtorPaper = () => {
    return (
        <div className={style.editorPaperContainer}>
            <main className={style.editorPaper}>
                <DatePill date='9 sierpnia 2024' />
            </main>
        </div>
    )
}

export default EdtorPaper