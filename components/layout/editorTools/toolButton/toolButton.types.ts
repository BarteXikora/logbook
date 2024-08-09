interface ToolButton {
    icon: string
    isActive: boolean
    onClick: () => void
    doNotBlur?: boolean
}

export default ToolButton