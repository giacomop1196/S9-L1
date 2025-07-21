import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageComponent from './components/ImageComponent'
import ButtonComponent from './components/ButtonComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <ButtonComponent textButton='Cliccami' />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ImageComponent imgAlt='gatto' imgSrc="https://respet.it/cdn/shop/articles/Untitled_design_3_24dabf00-2ff8-4c4c-b49a-ab3872cfb046.png?v=1708506757" />
    </>
  )
}

export default App
