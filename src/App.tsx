import type React from "react"
import Dashboard from "./components/Dashboard"
import "./App.scss"

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Dashboard />
    </div>
  )
}

export default App
