const baseURL = "https://mentor-mentee-matching-backend.onrender.com";

export const api = {
  users: {
    signup: `${baseURL}/users/signup`,
    signin: `${baseURL}/users/signin`,
    userProfile: `${baseURL}/users/userProfile`,
    match: `${baseURL}/users/lists`,
  },
};
