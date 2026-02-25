import { useEffect, useRef } from 'react'

export default function Contact() {
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
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="contact-inner">
                <h2 className="contact-headline reveal">
                    Available for direction,<br />design, and deliberate work.
                </h2>
                <div className="contact-links reveal reveal-delay-1">
                    <a href="mailto:lazzuardapramudita@gmail.com" className="contact-link">
                        lazzuardapramudita@gmail.com
                    </a>
                    <a href="https://wa.me/628990989498" className="contact-link">
                        +628990989498
                    </a>
                </div>
                <div className="contact-social reveal reveal-delay-2">
                    <a href="https://instagram.com/kontempleasure" target="_blank" rel="noopener" className="contact-social-link">
                        @kontempleasure
                    </a>
                    <span className="filter-dot" aria-hidden="true">·</span>
                    <a href="https://instagram.com/contempore.s" target="_blank" rel="noopener" className="contact-social-link">
                        @contempore.s
                    </a>
                    <span className="filter-dot" aria-hidden="true">·</span>
                    <a href="https://www.imdb.com/name/nm17268911/" target="_blank" rel="noopener" className="contact-social-link">
                        IMDb
                    </a>
                    <span className="filter-dot" aria-hidden="true">·</span>
                    <a href="https://www.linkedin.com/in/lazzuarda-pramudita-amalia-3079bb224/" target="_blank" rel="noopener" className="contact-social-link">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}
