export const setUser = (state = {}, action) => {
  if (action.type === 'LOG_IN_SUCCEED') {
    return {
      ...state,
      accessToken: action.payload,
      isLoggedIn: true,
    };
  } else {
    return state;
  }
};
