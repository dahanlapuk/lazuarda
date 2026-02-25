import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

function getImageLabel(src) {
    const filename = src.split('/').pop().replace(/\.[^.]+$/, '')
    return filename
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
}

export default function ArtworkImage({ src, alt, links, instagramUrl }) {
    const [hovered, setHovered] = useState(false)
    const [lightbox, setLightbox] = useState(false)
    const label = links.label || getImageLabel(src)

    return (
        <>
            <div
                className="artwork-img-wrapper"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setLightbox(true)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightbox(true) }}
                aria-label={`${label} — click to view`}
            >
                <img src={src} alt={alt} loading="lazy" />
                <div className={`artwork-overlay${hovered ? ' visible' : ''}`}>
                    <span className="artwork-label">{label}</span>
                    <div className="artwork-links">
                        <a href={links.spotify} target="_blank" rel="noopener" className="artwork-link" onClick={e => e.stopPropagation()}>
                            Spotify
                        </a>
                        <a href={links.ytMusic} target="_blank" rel="noopener" className="artwork-link" onClick={e => e.stopPropagation()}>
                            YT Music
                        </a>
                        <a href={links.appleMusic} target="_blank" rel="noopener" className="artwork-link" onClick={e => e.stopPropagation()}>
                            Apple Music
                        </a>
                    </div>
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
