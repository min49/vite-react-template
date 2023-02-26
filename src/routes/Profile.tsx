import {useUser} from 'services/userService'

export default function Profile() {
  const {status, data, error} = useUser()

  let username = ''
  if (status === 'loading') {
    username = '...'
  } else if (status === 'error') {
    console.error('Error loading User.', error)
  } else {
    username = data.username
  }

  return <h1 className="text-center">Hello {username}!</h1>
}
