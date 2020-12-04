const reducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_USER':
        return [...state, action.payload];
      case 'USER_LOGIN':
          //return [...state, action.payload];
          return action.payload;
      default:
        return state;
    }
  }
  
  export default reducer;