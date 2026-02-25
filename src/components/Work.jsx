import { useState, useEffect, useRef } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

const FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'art-direction', label: 'Art Direction' },
    { key: 'graphic-design', label: 'Graphic Design' },
]

export default function Work({ onOpenProject }) {
    const [activeFilter, setActiveFilter] = useState('all')
    const sectionRef = useRef(null)

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.reveal')
        if (!els) return
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
            { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
        )
        els.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [filtered])

    return (
        <section className="work" id="work" ref={sectionRef}>
            <div className="section-header reveal">
                <h2 className="section-label">Work</h2>
                <div className="filter-bar" role="tablist" aria-label="Filter projects">
                    {FILTERS.map((f, i) => (
                        <span key={f.key} style={{ display: 'contents' }}>
                            {i > 0 && <span className="filter-dot" aria-hidden="true">·</span>}
                            <button
                                className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                                onClick={() => setActiveFilter(f.key)}
                                role="tab"
                                aria-selected={activeFilter === f.key}
                            >
                                {f.label}
                            </button>
                        </span>
                    ))}
                </div>
            </div>
            <div className="work-grid" id="work-grid">
                {filtered.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => onOpenProject(project)}
                    />
                ))}
            </div>
        </section>
    )
}
