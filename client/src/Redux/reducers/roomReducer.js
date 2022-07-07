
import { GET_ROOMS } from "../types/types";



const roomReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOMS:
      return payload;
      
    default:
      return state;
  }
}
export default roomReducer;
