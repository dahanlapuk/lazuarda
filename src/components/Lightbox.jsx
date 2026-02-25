import { useEffect } from 'react'

export default function Lightbox({ src, alt, instagramUrl, onClose }) {
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose])

    return (
        <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image fullscreen">
            <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt} />
                {instagramUrl && (
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener"
                        className="lightbox-ig-btn"
                        onClick={e => e.stopPropagation()}
                    >
                        View on Instagram ↗
                    </a>
                )}
            </div>
        </div>
    )
}
