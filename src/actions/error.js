const GET_ERRORS = 'GET_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const getErrors = (message, status, id = null) => ({
  type: GET_ERRORS,
  payload: { message, status, id },
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
