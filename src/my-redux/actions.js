
export const changeText = () => {
    return {
        type: 'CHANGE_TEXT'
    }
}

export const changeBack = () => {
    return {
        type: 'CHANGE_BACK'
    }
}
export const addToCart = item =>{
    return {
        type: 'ADDTOCART',
        payload: item
    }
}
export const removeFromCart = id => {
    return {
        type: 'REMOVE',
        id
    }
}
export const increment = item => {
    return{
        type: 'INCREMENT',
        item
    }
}
export const decrement = item => {
    return{
        type: 'DECREMENT',
        item
    }
}