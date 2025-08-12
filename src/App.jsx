import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white text-[#213547] min-h-screen min-w-[320px] m-0 flex flex-col justify-center items-center text-center max-w-7xl mx-auto p-8 dark:bg-[#1a1a1a] dark:text-white">
        <div className="p-8 max-w-full">
          <div className="flex justify-center">
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
              <img
                src={viteLogo}
                className="h-48 p-12 will-change-filter transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
                alt="Vite logo"
              />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img
                src={reactLogo}
                className="h-48 p-12 will-change-filter transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
                alt="React logo"
              />
            </a>
          </div>
          <h1 className="text-[3.2em] leading-[1.1] mb-8">Vite + React</h1>
          <div className="p-8 rounded-xl mb-4">
            <button
              className="rounded-lg border border-transparent py-2.5 px-5 text-base font-medium cursor-pointer transition-colors duration-250 bg-[#f9f9f9] dark:bg-[#1a1a1a] dark:text-white dark:hover:border-[#646cff] hover:border-[#747bff] focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#646cff]"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p className="mt-4">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="text-[#888]">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  )
}

export default App
