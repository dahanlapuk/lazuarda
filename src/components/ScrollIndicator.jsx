import { useState, useEffect } from 'react'

export default function ScrollIndicator() {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            setProgress(Math.min(scrollY / docHeight, 1) * 100)
            setVisible(scrollY > 100)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className={`scroll-indicator${visible ? ' visible' : ''}`} aria-hidden="true">
            <div className="scroll-indicator-track">
                <div className="scroll-indicator-thumb" style={{ height: `${progress}%` }} />
            </div>
        </div>
    )
}
