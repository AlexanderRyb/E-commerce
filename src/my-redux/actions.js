export const addToCart = (item) => {
  return {
    type: "ADDTOCART",
    payload: item,
  };
};
export const removeFromCart = (id) => {
  return {
    type: "REMOVE",
    id,
  };
};
export const increment = (item) => {
  return {
    type: "INCREMENT",
    item,
  };
};
export const decrement = (item) => {
  return {
    type: "DECREMENT",
    item,
  };
};
export const submit = () => {
  return {
    type: "SUBMIT",
  };
};
export const search = (query) => {
  return {
    type: "SEARCH",
    payload: query,
  };
};
export const submitRegistration = (name, password) =>{
  return {
    type: "SUBMITREGISTRATION",
    name: name,
    password: password
  }
}
export const addToWishList = (item) =>  {
  return {
    type: "ADDTOWISHLIST",
    payload: item
  }
}