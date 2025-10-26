import { handleAuth, handleLogin, handleLogout, handleCallback, handleProfile } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      connection: undefined // Allow all connections
    }
  }),
  logout: handleLogout(),
  callback: handleCallback(),
  profile: handleProfile()
})
