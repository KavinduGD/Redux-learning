const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state; // Return the current state if the action type is unknown
  }
};

export default loggedReducer;
