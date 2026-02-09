import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { Home, NotFound, ProductDetail, Docs, Pricing } from './pages'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
