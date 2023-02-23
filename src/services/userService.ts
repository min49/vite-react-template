import {useMemo} from 'react'
import {useQuery} from '@tanstack/react-query'

import {HttpService} from './httpService'

export interface User {
  username: string
}

class UserService {
  static apiUrl = import.meta.env.VITE_API_URL
  private httpService: HttpService

  constructor(token?: string) {
    this.httpService = new HttpService(UserService.apiUrl, token)
  }

  // Important to use arrow function to bind `this` to the class instance
  getUser = () => {
    return this.httpService.get<User>('/user')
  }
}

function useUserService() {
  const token = 'token' // get token from Auth service
  const userService = useMemo(() => new UserService(token), [token])
  return userService
}

function useUser() {
  const userService = useUserService()
  return useQuery({
    queryKey: ['user'],
    queryFn: userService.getUser,
  })
}

export {useUser}
