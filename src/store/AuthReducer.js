export default (state, action) => {
  switch (action.type) {
    case "CHECK_LOGIN":
      return {
        ...state,
        loading: false,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        loading: false,
        isLoggedIn: action.payload.logged_in,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};