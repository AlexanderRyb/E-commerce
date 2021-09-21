import productList from "../components/Products/productList.json";

const initialState = {
  items: productList,
  cart: []
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        cart: state.cart.concat(action.payload)
        
      };
      case "REMOVE": 
    return {

      ...state,      
  cart: state.cart.filter(id => id !== action.id)


  }
    case "INCREMENT":
      const index = state.cart.findIndex(checkIndex)
      function checkIndex(el) {
        return el.id === action.item.id
      }
      return {

        ...state,
        cart: state.cart.map((item, i)=>
        i === index?{...item, quantity: item.quantity + 1}
        : item
        )

      }
      case "DECREMENT":
        const ind = state.cart.findIndex(checkInd)
        function checkInd(el) {
          return el.id === action.item.id
        }
        return {
  
          ...state,
          cart: state.cart.map((item, i)=>
          i === ind?{...item, quantity: item.quantity - 1}
          : item
          )
  
        }
    default:
      return state;


  }
};
export default Reducer;
