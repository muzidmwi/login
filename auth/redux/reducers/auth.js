const initialState = {
  user: null,
  userType: null,
  expiration: null,
  clientId: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: null,
        userType: action.payload.userType,
        expiration: action.payload.expiresIn,
        clientId: action.payload.clientId,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
