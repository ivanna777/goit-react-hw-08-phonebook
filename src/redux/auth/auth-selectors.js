const getIsAuthenticated = (state) => state.auth.token;
const getMail = (state) => state.auth.user.email

export {
    getIsAuthenticated,
    getMail
}
