import {rest} from 'msw'

const apiUrl = import.meta.env.VITE_API_URL

const handlers = [
  rest.get(`${apiUrl}/user`, (req, res, ctx) => {
    return res(ctx.json({username: 'World'}))
  }),
]

export {handlers}
