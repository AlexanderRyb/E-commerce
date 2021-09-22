import productList from "../components/Products/productList.json";

const initialState = {
  items: productList,
  filteredItems: productList,
  cart: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      let itemIndex = state.cart.findIndex(checkItemIndex);
      function checkItemIndex(item) {
        return item.id == action.payload.id;
      }
      if (itemIndex === -1) {
        console.log(itemIndex);
        console.log(" not duplicate");

        return {
          ...state,
          cart: state.cart.concat(action.payload),
        };
      } else {
        console.log("duplicate");
        return state;
      }

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((id) => id !== action.id),
      };
    case "INCREMENT":
      const index = state.cart.findIndex(checkIndex);
      function checkIndex(el) {
        return el.id === action.item.id;
      }
      return {
        ...state,
        cart: state.cart.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case "DECREMENT":
      const ind = state.cart.findIndex(checkInd);
      function checkInd(el) {
        return el.id === action.item.id;
      }

      if (state.cart[ind].quantity < 2) {
        console.log(state.cart[ind].quantity);
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.item.id),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item, i) =>
            i === ind ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      }

    case "SUBMIT":
      return {
        ...state,
        cart: [],
      };

    case "SEARCH":
      if (action.payload) {
        console.log("the payload:" + action.payload);
        return {
          ...state,
          filteredItems: productList.filter((item) =>
            item.description.includes(action.payload)
          ),
        };
      } else {
        return {
          ...state,
          filteredItems: productList,
        };
      }
    default:
      return state;
  }
};
export default Reducer;
