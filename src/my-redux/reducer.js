import productList from "../components/Products/productList.json";


const initialState = {
  products: productList,
  wishList: [],
  cart: [],
  searchResult: [],
  maxValue: 25000,
  minValue: 0,
  textSearchValue: "",
  currentCategory: ["PC", "laptop", "phone"],
  users: [
    {
      email: "logged out",
      password: "?",
      cart: [],
      wishlist: [],
      history: [],
    },
    {
      email: "1",
      password: "1",
      cart: [],
      wishlist: [],
      history: [],
    },
  ],
  currentUser: 0,
  logInPage: true,
  signUpPage: false,
  userDataPage: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      //checks if items is already in the cart
      console.log(action.payload);

      let itemIndex =
        state.users[state.currentUser].cart.findIndex(checkItemIndex);

      function checkItemIndex(item) {
        return item.id === action.payload.id;
      }
      if (itemIndex === -1) {
        return {
          ...state,
          users: state.users.map((user, i) =>
            i === state.currentUser
              ? { ...user, cart: user.cart.concat(action.payload) }
              : user
          ),
        };
      } else {
        return state;
      }

    case "REMOVE":
      return {
        ...state,
        users: state.users.map((user, i) =>
          i === state.currentUser
            ? { ...user, cart: user.cart.filter((id) => id !== action.id) }
            : user
        ),
      };
    case "INCREMENT":
      const index = state.users[state.currentUser].cart.findIndex(checkIndex);
      function checkIndex(el) {
        return el.id === action.item.id;
      }
      return {
        ...state,
        users: state.users.map((user, i) =>
          i === state.currentUser
            ? {
                ...user,
                cart: user.cart.map((item, i) =>
                  i === index ? { ...item, quantity: item.quantity + 1 } : item
                ),
              }
            : user
        ),
      };
    case "DECREMENT":
      const ind = state.users[state.currentUser].cart.findIndex(checkInd);
      function checkInd(el) {
        return el.id === action.item.id;
      }

      if (state.users[state.currentUser].cart[ind].quantity < 2) {
        return {
          ...state,
          users: state.users.map((user, i) =>
            i === state.currentUser
              ? {
                  ...user,
                  cart: user.cart.filter((item) => item.id !== action.item.id),
                }
              : user
          ),
        };
      } else {
        return {
          ...state,
          users: state.users.map((user, i) =>
            i === state.currentUser
              ? {
                  ...user,
                  cart: user.cart.map((item, i) =>
                    i === ind ? { ...item, quantity: item.quantity - 1 } : item
                  ),
                }
              : user
          ),
        };
      }

    case "SUBMIT":
     
      if(state.currentUser != 0){

        console.log("current use is "+ state.currentUser)
        let dateObj = new Date()
        let day = dateObj.getDate();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var year = dateObj.getUTCFullYear();  
        let newdate = day + "/" + month + "/" + year;
    
        let itemCount = state.users[state.currentUser].cart.length;
        console.log(itemCount);
        let cartSum = state.users[state.currentUser].cart.reduce(function (
          total,
          item
  
        )
  
        {
  
          return total + item.price * item.quantity;
        },
        0);
        console.log(
          "Ви купили " + itemCount + " товарів. До оплати " + cartSum + " гривень"
        );
  
        let timeStampedCart = state.users[state.currentUser].cart.map(obj => ({ ...obj, timeStamp:  newdate }))
  
        console.log(timeStampedCart)

        return {
          ...state,
          users: state.users.map((user, i) =>
            i === state.currentUser
              ? {
                  ...user,
                  history:user.history.concat(timeStampedCart),
                  cart: []
                  
                }
              : user
          ),
        };

      }
      // else{

      //   return{
      //     ...state

      
      //   }
      // }


     

    case "SEARCH":
      if (action.payload) {
        console.log("the payload:" + action.payload);
        return {
          ...state,
          textSearchValue: action.payload,
          searchResult: state.products
            .filter((item) =>
              item.description
                .toLowerCase()
                .includes(state.textSearchValue.toLowerCase())
            )
            .filter(
              (item) =>
                item.price > state.minValue && item.price < state.maxValue
            )
            .filter(
              (item) => state.currentCategory.indexOf(item.category) !== -1
            ),
        };
      } else {
        return state;
      }
    case "ADDTOWISHLIST":
      let wishlistItemIndex = state.users[state.currentUser].wishlist.findIndex(
        checkWishlistItemIndex
      );
      function checkWishlistItemIndex(item) {
        return item.id === action.payload.id;
      }
      if (wishlistItemIndex === -1) {
        return {
          ...state,
          users: state.users.map((user, i) =>
            i === state.currentUser
              ? { ...user, wishlist: user.wishlist.concat(action.payload) }
              : user
          ),
        };
      } else {
        return state;
      }
        case "REMOVEFROMWISHLIST":
      return {
        ...state,
        users: state.users.map((user, i) =>
          i === state.currentUser
            ? {
                ...user,
                wishlist: user.wishlist.filter((id) => id !== action.id),
              }
            : user
        ),
      };
    case "SHOWCOMPUTERS":
      return {
        ...state,
        currentCategory: ["PC"],
        searchResult: state.products
          .filter((item) =>
            item.description
              .toLowerCase()
              .includes(state.textSearchValue.toLowerCase())
          )

          .filter(
            (item) => item.price > state.minValue && item.price < state.maxValue
          )
          .filter((item) => ["PC"].indexOf(item.category) !== -1),
      };
    case "SHOWLAPTOPS":
      return {
        ...state,
        currentCategory: ["laptop"],
        searchResult: state.products
          .filter((item) =>
            item.description
              .toLowerCase()
              .includes(state.textSearchValue.toLowerCase())
          )

          .filter(
            (item) => item.price > state.minValue && item.price < state.maxValue
          )
          .filter((item) => ["laptop"].indexOf(item.category) !== -1),
      };
    case "SHOWSMARTPHONES":
      return {
        ...state,
        currentCategory: ["phone"],
        searchResult: state.products
          .filter((item) =>
            item.description
              .toLowerCase()
              .includes(state.textSearchValue.toLowerCase())
          )

          .filter(
            (item) => item.price > state.minValue && item.price < state.maxValue
          )
          .filter((item) => ["phone"].indexOf(item.category) !== -1),
      };
    case "SHOWTABLETS":
      return {
        ...state,
        currentCategory: ["tablet"],
        searchResult: state.products
          .filter((item) =>
            item.description
              .toLowerCase()
              .includes(state.textSearchValue.toLowerCase())
          )

          .filter(
            (item) => item.price > state.minValue && item.price < state.maxValue
          )
          .filter((item) => ["tablet"].indexOf(item.category) !== -1),
      };

    case "SHOWEVERYCATEGORY":
      return {
        ...state,
        currentCategory: ["PC", "laptop", "phone"],

        searchResult: state.products
          .filter((item) =>
            item.description
              .toLowerCase()
              .includes(state.textSearchValue.toLowerCase())
          )

          .filter(
            (item) => item.price > state.minValue && item.price < state.maxValue
          )
          .filter(
            (item) => ["PC", "laptop", "phone"].indexOf(item.category) !== -1
          ),
      };
    case "SORTBYNAME":

      let sortedResult = state.products.sort(function(a, b) {
        if(a.description.toLowerCase() < b.description.toLowerCase()) return -1;
        if(a.description.toLowerCase() > b.description.toLowerCase()) return 1;
        return 0;
       }) 

      return{
        ...state, 
        searchResult: sortedResult
      }  
    case "UPDATEMAXPRICE":
      return {
        ...state,
        maxValue: action.value,
        searchResult: state.products
          .filter(
            (item) => item.price > state.minValue && item.price < action.value
          )
          .filter(
            (item) => state.currentCategory.indexOf(item.category) !== -1
          ),
      };
    case "UPDATEMINPRICE":
      return {
        ...state,
        minValue: action.value,
        searchResult: state.products
          .filter(
            (item) => item.price > state.minValue && item.price < state.maxValue
          )
          .filter(
            (item) => state.currentCategory.indexOf(item.category) !== -1
          ),
      };

    case "ADDNEWUSER":
      let newUser = {};
      let currentUser = state.currentUser;
      let updatedUsers = state.users;
      let correctDataCheck = true;
      //check if password and passwordAgain are identical
      if (action.password === action.passwordAgain) {
        //check if this email already occurs in the database
        function findEmail(e) {
          return e.email === action.email;
        }
        if (state.users.findIndex(findEmail) === -1) {
          newUser.email = action.email;
          newUser.password = action.password;
          newUser.history = []
          newUser.cart = [];
          newUser.wishlist = [];
          updatedUsers.push(newUser);
          console.log(
            "register success - " + action.email,
            action.password + " users stored " + state.users.length
          );
          console.log(state.users);
          currentUser = state.users.length - 1;
          console.log("current user is " + currentUser);
        } else {
          console.log("Account with that email already exists.");
          correctDataCheck = false;
        }
      } else {
        console.log("passwords dont match");
        correctDataCheck = false;
      }
      return {
        ...state,
        users: updatedUsers,
        currentUser: currentUser,
        logInPage: false,
        signUpPage: !correctDataCheck,
        userDataPage: correctDataCheck,
      };
    case "LOGIN":
      console.log(action.email + action.password);
      //check if this email/password pair is in the database
      let newCurrentUser = state.currentUser;
      let correctLoginDataCheck = true;

      if (state.users.findIndex(findUser) === -1) {
        console.log("no match");
        console.log("new cur user " + newCurrentUser);
        console.log("input - " + action.email + action.password);
        console.log(
          "should be equal to  - " +
            state.users[1].email +
            state.users[1].password
        );
        correctLoginDataCheck = false;
      } else {
        console.log("match!");
        newCurrentUser = state.users.findIndex(findUser);
      }
      function findUser(e) {
        return e.email === action.email && e.password === action.password;
      }
      return {
        ...state,
        currentUser: newCurrentUser,
        logInPage: !correctLoginDataCheck,
        signUpPage: false,
        userDataPage: correctLoginDataCheck,
      };

    default:
      return state;

    case "LOGOUT":
      return {
        ...state,
        currentUser: 0,
        logInPage: true,
        signUpPage: false,
        userDataPage: false,
      };

    case "OPENSIGNUPPAGE":
      return {
        ...state,
        logInPage: false,
        signUpPage: true,
        userDataPage: false,
      };
    case "OPENSIGNINPAGE":
      return {
        ...state,
        logInPage: true,
        signUpPage: false,
        userDataPage: false,
      };
    case "UPDATESORTING":
      console.log(action.payload)
      return {
        ...state,
      };
  }
};

export default Reducer;
