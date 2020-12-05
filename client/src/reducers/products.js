const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return action.payload;
    case 'GET_ONE_PRODUCT':
      return action.payload;
    case 'GET_CAT_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
}

export default reducer;