const GET_ERRORS = 'GET_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

const initialState = {
  message: {},
  status: null,
  id: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        message: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
