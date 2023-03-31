const baseURL = "http://localhost:3000";

export const api = {
    users: {
        signup: `${baseURL}/users/signup`,
        signin: `${baseURL}/users/signin`,
        userProfile: `${baseURL}/users/userProfile`,
    }
}