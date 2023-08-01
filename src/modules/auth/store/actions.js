import authApi from "@/api/authApi"

// export const myAction = async ({ commit }) => {

// }

export const createUser = async ({ commit }, user) => {
    const { name, email, password } = user
    try {
        const { data } = await authApi.post(':signUp',{ email, password, returnSecureToken: true})
        const { idToken, refreshToken } = data
        const resp = await authApi.post(':update', { displayName: name, idToken})
        console.log(resp)
        // TODO: Mutation: LoginUser
        return { ok: true}
    } catch (error) {
        return { ok: false, message: error.response.data.error.message}
    }
}