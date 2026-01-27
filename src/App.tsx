import { Routes, Route } from 'react-router-dom'
import { Home, NotFound, ProductDetail } from './pages'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
