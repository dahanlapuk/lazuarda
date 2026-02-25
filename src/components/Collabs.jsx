const COLLABS = [
    'Uncle Wire',
    'BRKNBOYS',
    'Trembesi Band',
    'After Drop',
    'Rakyat Militan Sastra',
    'Vidio Original Series',
]

export default function Collabs() {
    // Duplicate list for seamless infinite scroll
    const items = [...COLLABS, ...COLLABS, ...COLLABS]

    return (
        <section className="collabs" id="collabs">
            <div className="collabs-inner">
                <h2 className="section-label reveal-static">Selected Collaborations</h2>
                <div className="marquee-wrapper" aria-label="Collaborators">
                    <div className="marquee-track">
                        {items.map((name, i) => (
                            <span key={i} className="marquee-item">
                                {name}
                                <span className="marquee-dot" aria-hidden="true">·</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
