export const setTokens = (user, userType, expiration, clientId) => ({
  type: "LOGIN",
  payload: { user, userType, expiration, clientId },
});

export const clearTokens = () => ({
  type: "LOGOUT",
});
