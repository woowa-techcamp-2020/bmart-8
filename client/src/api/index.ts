const baseURL = '/api';

export const googleLogin = async () => {
  window.location.href = `${baseURL}/auth/google`;
};
