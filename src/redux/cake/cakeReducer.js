const initialState = {
  numOfCakes: 10,
  pi: 3.14,
};
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case "SELL_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    case "RESET":
      return {
        ...state,
        numOfCakes: 0,
      };
    default:
      return state;
  }
};
export default cakeReducer;
