import { useEffect, useRef } from 'react'

export default function Hero() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.reveal')
        if (!els) return
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
            { threshold: 0.12 }
        )
        els.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="hero" id="hero" ref={sectionRef}>
            <div className="hero-inner">
                <h1 className="hero-name reveal">
                    <span>LAZZUARDA</span>
                    <span>PRAMUDITA</span>
                </h1>
                <div className="hero-meta reveal reveal-delay-1">
                    <p className="hero-role">Art Director &amp; Graphic Designer</p>
                    <p className="hero-tagline">
                        Directs visuals where narrative precision<br />meets graphic restraint.
                    </p>
                </div>
                <p className="hero-manifesto reveal reveal-delay-2">Visual decisions are never small.</p>
            </div>
            <a href="#work" className="hero-scroll reveal reveal-delay-3" aria-label="Scroll to work">↓</a>
        </section>
    )
}
