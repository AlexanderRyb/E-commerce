import productList from "../components/Products/productList.json";


const initialState = {
  items: productList,
  filteredItems: productList,
  wishList: [],
  cart: [],
  users: [],
  submitData: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      //checks if items is already in the cart
      let itemIndex = state.cart.findIndex(checkItemIndex);
      function checkItemIndex(item) {
        return item.id === action.payload.id;
      }
      if (itemIndex === -1) {
        return {
          ...state,
          cart: state.cart.concat(action.payload),
        };
      } else {
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
 
      let itemCount = state.cart.length;
      console.log(itemCount);
      let cartSum = state.cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
      }, 0);
      console.log(

        "Ви купили " +
          itemCount +
          " товарів. До оплати " +
          cartSum +
          " гривень."
      );
      

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
            item.description.toLowerCase().includes(action.payload)
          ),
        };
      } else {
        return {
          ...state,
          filteredItems: productList,
        };
      }
    case "ADDTOWISHLIST":
      let wishlistItemIndex = state.wishList.findIndex(checkWishlistItemIndex);
      function checkWishlistItemIndex(item) {
        return item.id === action.payload.id;
      }
      if (wishlistItemIndex === -1) {
        return {
          ...state,
          wishList: state.wishList.concat(action.payload),
        };
      } else {
        return state;
      }

    case "REMOVEFROMWISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter((id) => id !== action.id),
      };
     case "SHOWCOMPUTERS": 
     return {
       ...state,
       filteredItems: productList.filter((element) => element.category === "PC")

     }
     case "SHOWNOTEBOOKS": 
     return {
       ...state,
       filteredItems: productList.filter((element) => element.category === "notebook")

     }
     case "SHOWSMARTPHONES": 
     return {
       ...state,
       filteredItems: productList.filter((element) => element.category === "phone")

     }

     case "SHOWEVERYCATEGORY": 
     return {
       ...state, 
       filteredItems: productList
     }

    // case "SUBMITREGISTRATION":
    //   console.log(state.users)
    //   let newProfile = {
    //     userName: action.name,
    //     userPassword: action.password
    //   }
    //   return  {
    //     ...state,
    //     users: state.users.concat(newProfile)

    //   }

    default:
      return state;
  }
};
export default Reducer;
