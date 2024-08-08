'use client'

import Dropdown from '@components/ui/dropdown/Dropdown'
import ToolButton from './toolButton/ToolButton'

import style from './editorTools.module.scss'

const EditorTools = () => {
    return (
        <section className={style.editorToolsContainer}>
            <div className={style.group}>
                <ToolButton icon='/icons/arrow-back.svg' isActive={false} onClick={() => { }} />
                <ToolButton icon='/icons/arrow-forward.svg' isActive={false} onClick={() => { }} />
            </div>

            <div className={style.mainTools}>
                <div className={style.group}>
                    <ToolButton icon='/icons/heading-1.svg' isActive={true} onClick={() => { }} />
                    <ToolButton icon='/icons/heading-2.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/heading-3.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/text.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/quote.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/separator.svg' isActive={false} onClick={() => { }} />
                </div>

                <div className={style.group}>
                    <ToolButton icon='/icons/bold.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/italic.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/underline.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/line-through.svg' isActive={false} onClick={() => { }} />
                </div>

                <div className={style.group}>
                    <ToolButton icon='/icons/align-left.svg' isActive={true} onClick={() => { }} />
                    <ToolButton icon='/icons/align-center.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/align-right.svg' isActive={false} onClick={() => { }} />
                    <ToolButton icon='/icons/align-justify.svg' isActive={false} onClick={() => { }} />
                </div>
            </div>

            <div className={style.group}>
                <Dropdown
                    button={{ text: 'Podpisz...', $icon: '/icons/padlock.svg', $showArrow: true }}
                    content={<>podpisz</>}
                />
            </div>
        </section>
    )
}

export default EditorTools