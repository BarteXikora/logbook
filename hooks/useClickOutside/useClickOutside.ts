import { useRef, useEffect } from 'react'

const useClickOutside = (callback: () => any) => {
    const ref = useRef<any>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) callback()
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)

    }, [ref, callback])

    return ref
}

export default useClickOutside