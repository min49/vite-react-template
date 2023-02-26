import reactLogo from 'assets/react.svg'

export default function Home() {
  return (
    <div className="flex justify-center">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <img src={reactLogo} alt="React logo" />
      </a>
    </div>
  )
}
