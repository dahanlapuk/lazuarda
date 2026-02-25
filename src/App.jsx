import { useState, useEffect, useRef } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Collabs from './components/Collabs.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import ScrollIndicator from './components/ScrollIndicator.jsx'

export default function App() {
    const [activeProject, setActiveProject] = useState(null)

    // Lock scroll when modal open
    useEffect(() => {
        document.body.style.overflow = activeProject ? 'hidden' : ''
    }, [activeProject])

    // Escape key closes modal
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') setActiveProject(null) }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    return (
        <>
            <Header />
            <ScrollIndicator />
            <main>
                <Hero />
                <Work onOpenProject={setActiveProject} />
                <About />
                <Collabs />
                <Contact />
            </main>
            <Footer />
            {activeProject && (
                <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
            )}
        </>
    )
}
