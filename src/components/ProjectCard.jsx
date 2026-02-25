import { useEffect, useRef } from 'react'

export default function ProjectCard({ project, onClick }) {
    const cardRef = useRef(null)

    useEffect(() => {
        const card = cardRef.current
        if (!card) return
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
            { threshold: 0.08 }
        )
        observer.observe(card)
        return () => observer.disconnect()
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() }
    }

    return (
        <article
            ref={cardRef}
            className={`project-card${project.wide ? ' wide' : ''} reveal`}
            data-category={project.category}
            role="button"
            tabIndex={0}
            aria-label={`View project: ${project.title}`}
            onClick={onClick}
            onKeyDown={handleKeyDown}
        >
            <img src={project.cover} alt={project.title} loading="lazy" />
            <div className="project-card-overlay">
                <p className="project-card-title">{project.title}</p>
                <p className="project-card-meta">{project.categoryLabel}</p>
            </div>
        </article>
    )
}
