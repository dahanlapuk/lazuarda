import { useEffect, useRef } from 'react'

export default function About() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.reveal')
        if (!els) return
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )
        els.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="about-inner">
                <h2 className="section-label reveal">About</h2>
                <div className="about-content">
                    <p className="about-text reveal">
                        Lazzuarda Pramudita is an art director and graphic designer based in Indonesia.
                    </p>
                    <p className="about-text reveal reveal-delay-1">
                        She works at the intersection of visual storytelling and contextual realism — directing
                        scenes for film and music video, and building visual identities for musicians and brands.
                    </p>
                    <p className="about-text reveal reveal-delay-2">
                        Design, to her, is a narrative tool supporting story, space, and character.
                    </p>
                </div>
            </div>
        </section>
    )
}
