import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

import { HomePage } from './pages/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { BookPage } from './pages/BookPage';
import { TeachingPage } from './pages/TeachingPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { CurriculumVitaePage } from './pages/CurriculumVitaePage';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen bg-[#FBFBF9] text-[#1E252B] flex flex-col font-sans selection:bg-[#0F2942] selection:text-white">
        {/* Persistent Academic Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cv" element={<CurriculumVitaePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Floating Back to Top Control */}
        <BackToTop />

        {/* Persistent Academic Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
