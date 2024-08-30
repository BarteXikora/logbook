import ToolButtonProps from './toolButton.types'
import Image from 'next/image'

import style from './toolButton.module.scss'

const ToolButton = ({ icon, isActive, onClick, doNotBlur }: ToolButtonProps) => {
    return (
        <button
            className={`${style.toolButton} ${isActive && style.toolButtonActive}`}
            onClick={onClick}
            data-donotblur={doNotBlur}
        >
            <Image src={icon} width={45} height={45} alt='Ikona' />
        </button>
    )
}

export default ToolButton