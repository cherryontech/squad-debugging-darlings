const baseURL = "https://cot-tech-tonic.herokuapp.com";

export const api = {
  users: {
    signup: `${baseURL}/users/signup`,
    signin: `${baseURL}/users/signin`,
    userProfile: `${baseURL}/users/userProfile`,
    match: `${baseURL}/users/lists`,
  },
};
