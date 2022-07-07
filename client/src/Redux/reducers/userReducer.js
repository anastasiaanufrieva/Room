import { USER_LOGIN, USER_LOGUP } from '../types/types';

// eslint-disable-next-line default-param-last
const userReducer = (state = { isFetch: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return payload;

    case USER_LOGUP:
      return payload;

    default:
      return state;
  }
};
export default userReducer;
