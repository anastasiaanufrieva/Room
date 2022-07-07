import axios from 'axios';
// import { useSelector } from 'react-redux';
import { CHANGE_STATUS, ONE_ROOM } from '../types/types';

export const addOneRoom = (value) => ({
  type: ONE_ROOM,
  payload: value,
})

export const status = (id) => ({
  type: CHANGE_STATUS,
  payload: id,
})

export const getRoom = (id) => (dispatch) => {
  axios(`http://localhost:3001/rooms/${id}`)
    .then((res) => dispatch(addOneRoom(res.data)))
}

export const saveStatus = (id, elId) => {
  fetch(`http://localhost:3001/rooms/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {id, elId}
    )
  })
}
