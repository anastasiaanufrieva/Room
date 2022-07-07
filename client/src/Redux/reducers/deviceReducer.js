
import { CHANGE_STATUS, ONE_ROOM } from "../types/types";



const deviceReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ONE_ROOM:
      return payload;
    case CHANGE_STATUS:
      return state.map(el => el.id === payload ? {...el, status: !el.status} : el);
    default:
      return state;
  }
}
export default deviceReducer;
