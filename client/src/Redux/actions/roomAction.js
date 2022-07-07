import axios from 'axios';
import { GET_ROOMS } from '../types/types';


export const addAllRooms = (value) => ({
  type: GET_ROOMS,
  payload: value,
});


export const getAllRooms = () => (dispatch) => {
  axios('http://localhost:3001/rooms')
    .then((res) => dispatch(addAllRooms(res.data)))
}


