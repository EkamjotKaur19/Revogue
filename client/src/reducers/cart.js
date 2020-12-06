const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      //return [...state, action.payload];
      return state.filter((state) => state._id !== action.payload._id);
    case 'CLEAR_CART':
      return []
    case 'GET_ALL_ITEMS':
      return [...state];
    default:
      return state;
  }
}
  
export default reducer;