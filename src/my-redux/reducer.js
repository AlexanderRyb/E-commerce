import productList from "../components/Products/productList.json";

const initialState = {
  items: productList,
  filteredItems: productList,
  wishList: [],
  cart: [],
  submitData: [],
  maxValue: 40000,
  minValue: 0,
  users: [{ email: "transoceantrain@gmail.com", password: "123", data: "" }],
  currentUser: 1,
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
        filteredItems: productList.filter(
          (element) => element.category === "PC"
        ),
      };
    case "SHOWNOTEBOOKS":
      return {
        ...state,
        filteredItems: productList.filter(
          (element) => element.category === "notebook"
        ),
      };
    case "SHOWSMARTPHONES":
      return {
        ...state,
        filteredItems: productList.filter(
          (element) => element.category === "phone"
        ),
      };

    case "SHOWEVERYCATEGORY":
      return {
        ...state,
        filteredItems: productList,
      };
    case "UPDATEMAXPRICE":
      return {
        ...state,
        maxValue: action.value,
        filteredItems: productList.filter((item) => item.price < action.value),
      };
    case "UPDATEMINPRICE":
      return {
        ...state,
        minValue: action.value,
        filteredItems: productList.filter((item) => item.price > action.value),
      };

    case "UPDATEPRICERANGE":
      return {
        ...state,
        minValue: action.value,
        maxValue: action.value,
        filteredItems: productList.filter(
          (item) => item.price > state.minValue && item.price < state.maxValue
        ),
      };
    case "ADDNEWUSER":
      let newUser = {};
      let updatedUsers = state.users;
      //check if password and passwordAgain are identical
      if (action.password === action.passwordAgain) {
        //check if this email already occurs in the database
        function findEmail(e) {
          return e.email === action.email;
        }
        if (state.users.findIndex(findEmail) === -1) {
          newUser.email = action.email;
          newUser.password = action.password;
          updatedUsers.push(newUser);
          console.log("register success -"+ action.email, action.password + "users stored "+state.users.length)
          console.log(state.users)
        }
        else{
          console.log('failure mode - Account with that email already exists.')
        }
      }
      else{
        console.log('failure mode - passwords dont match')

      }
      return {
        ...state,
        users: updatedUsers,

        //push user data object to users
      };
    case "LOGIN":
      console.log(action.email + action.password);

      //check if this email/password pair is in the database
      let updatedUser = state.currentUser;

      if (state.users.findIndex(findUser) !== -1) {
        console.log("match! ");
        updatedUser = state.users[state.users.findIndex(findUser)];
      }
      function findUser(e) {
        console.log("no match")

        return e.email === action.email && e.password === action.password;
      }

      //open user page with custom data

      return {
        ...state,
        currentUser: updatedUser,
      };

    default:
      return state;
  }
};
export default Reducer;
