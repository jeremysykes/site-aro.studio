import { Routes, Route } from 'react-router-dom'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </div>
  )
}

export default App
