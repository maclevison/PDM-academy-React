export const TOKEN_KEY = '@Twitter'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null && isValidToken()
export const isValidToken = () => getToken() // TODO: Verificar se é um token válido
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = token => localStorage.setItem(TOKEN_KEY, token)
export const removeToken = () => localStorage.removeItem(TOKEN_KEY)
