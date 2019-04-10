export const TOKEN_KEY = '@Tweet'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
// export const isValidToken = () => getToken() // TODO: Verificar se é um token válido
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = token => localStorage.setItem(TOKEN_KEY, token)
export const removeToken = () => localStorage.removeItem(TOKEN_KEY)
