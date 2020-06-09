const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;

    default: return state;
  }
}

export default filterReducer;