const reducer = (state, action) => {
  switch (action.type) {
    case "incrment":
      return { ...state, count: state.count + 1 };
    case "descrment":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "incrmentByAmount":
      return { ...state, count: state.count + action.payload };
    case "descrmentByAmount":
      return { ...state, count: state.count - action.payload };

    default:
      return { state };
  }
};

export default reducer;
