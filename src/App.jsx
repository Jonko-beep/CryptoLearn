import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProgressProvider } from './hooks/useProgress'
import AppShell from './components/layout/AppShell'
import DashboardPage from './pages/DashboardPage'
import CurriculumPage from './pages/CurriculumPage'
import LessonPage from './pages/LessonPage'
import GlossaryPage from './pages/GlossaryPage'

/**
 * App — providers + routing. ProgressProvider supplies learner state to every
 * page; AppShell is the persistent layout hosting the routed pages.
 */
export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<DashboardPage />} />
            <Route path="curriculum" element={<CurriculumPage />} />
            <Route path="lesson/:id" element={<LessonPage />} />
            <Route path="glossary" element={<GlossaryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  )
}
