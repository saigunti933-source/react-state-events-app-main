import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('red')

  const colors = ['red', 'blue', 'green', 'yellow']

  return (
    <main className="page" style={{ backgroundColor }}>
      <section className="color-card">
        <h1>State and Events</h1>
        <p>Click a button to change the background color.</p>

        <div className="button-group">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setBackgroundColor(color)}
              className={`color-button ${color}`}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>

        <p>Current color: {backgroundColor}</p>
      </section>
    </main>
  )
}

export default App
