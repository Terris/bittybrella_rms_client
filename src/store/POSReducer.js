export default (state, action) => {
  switch (action.type) {
    case "CREATE_TICKET":
      return {
        ...state,
        loading: false,
        ticket: action.payload.ticket,
        errors: action.payload.errors,
      };
    default:
      return state;
  }
};
