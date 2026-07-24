import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ArticlesPage from './pages/ArticlesPage'
import HomePage from './pages/HomePage'

function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    const scroll = () => {
      if (location.hash) {
        const target = document.querySelector(location.hash)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }
    const timer = window.setTimeout(scroll, 50)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artigos" element={<ArticlesPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
