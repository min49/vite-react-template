import reactLogo from 'assets/react.svg'
import {useUser} from 'services/userService'

function App() {
  const {status, data, error} = useUser()

  let username = ''
  if (status === 'loading') {
    username = '...'
  } else if (status === 'error') {
    console.error('Error loading User.', error)
  } else {
    username = data.username
  }

  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-center">Hello {username}!</h1>
    </div>
  )
}

export default App
