import { useState } from 'react'
import ArtworkImage from './ArtworkImage.jsx'
import Lightbox from './Lightbox.jsx'

function getImageLabel(src) {
    const filename = src.split('/').pop().replace(/\.[^.]+$/, '')
    return filename
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
}

function RegularImage({ src, alt, instagramUrl }) {
    const [hovered, setHovered] = useState(false)
    const [lightbox, setLightbox] = useState(false)
    const label = getImageLabel(src)

    return (
        <>
            <div
                className="modal-img-wrapper"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setLightbox(true)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightbox(true) }}
                aria-label={`${label} — click to enlarge`}
            >
                <img src={src} alt={alt} loading="lazy" />
                <div className={`img-label-overlay${hovered ? ' visible' : ''}`}>
                    <span className="img-label">{label}</span>
                    {instagramUrl && (
                        <span className="img-label-ig">lihat di Instagram ↗</span>
                    )}
                </div>
            </div>
            {lightbox && (
                <Lightbox
                    src={src}
                    alt={alt}
                    instagramUrl={instagramUrl}
                    onClose={() => setLightbox(false)}
                />
            )}
        </>
    )
}

export default function ProjectModal({ project, onClose }) {
    const hasImageLinks = project.imageLinks && project.imageLinks.length > 0
    const perImageLinks = project.perImageLinks || []

    return (
        <div className="modal open" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal-panel">
                <button className="modal-close" onClick={onClose} aria-label="Close project">✕</button>
                <div className="modal-header">
                    <h2 className="modal-title" id="modal-title">{project.title}</h2>
                    <p className="modal-meta">{project.categoryLabel} · {project.year}</p>
                </div>
                <p className="modal-desc">{project.description}</p>

                <div className={`modal-images${project.naturalImages ? ' natural' : ''}`}>
                    {project.images.map((src, i) => {
                        const igUrl = perImageLinks[i] || null
                        if (hasImageLinks && project.imageLinks[i]) {
                            return (
                                <ArtworkImage
                                    key={i}
                                    src={src}
                                    alt={`${project.title} — ${i + 1}`}
                                    links={project.imageLinks[i]}
                                    instagramUrl={igUrl}
                                />
                            )
                        }
                        return (
                            <RegularImage
                                key={i}
                                src={src}
                                alt={`${project.title} — ${i + 1}`}
                                instagramUrl={igUrl}
                            />
                        )
                    })}
                </div>

                <div className="modal-actions">
                    {project.youtubeUrl && (
                        <a href={project.youtubeUrl} target="_blank" rel="noopener" className="modal-action-link">
                            Watch on YouTube ↗
                        </a>
                    )}
                    {project.externalLinks && project.externalLinks.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener" className="modal-action-link">
                            {link.label} ↗
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
