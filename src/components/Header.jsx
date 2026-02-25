import { useState, useEffect } from 'react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => setReady(true))
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`header${ready ? ' ready' : ''}${scrolled ? ' scrolled' : ''}`} id="header">
            <a href="#hero" className="header-name">LP</a>
            <nav className="header-nav">
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}
