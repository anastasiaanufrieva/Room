import axios from 'axios';
import { USER_LOGIN, USER_LOGUP } from '../types/types';

export const userLogin = (value) => ({
  type: USER_LOGIN,
  payload: value,
});

export const valUser = (input) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/user/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: input.email,
      password: input.password,
    }),
  });
  if (response.ok) {
    const q = await response.json();
    dispatch(userLogin(q.user));
  }
};

export const userLogup = (value) => ({
  type: USER_LOGUP,
  payload: value,
});

export const regUser = (input) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/user/logup', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      password: input.password,
    }),
  });
  if (response.ok) {
    const w = await response.json();
    dispatch(userLogup(w.currUser));
  }
};

export const checkUser = () => (dispatch) => {
  axios.post('/user/check')
    .then((response) => {
      dispatch(userLogin(response.data));
    })
    // eslint-disable-next-line no-console
    .catch((err) => dispatch(userLogin({})));
};

export const logoutUser = () => (dispatch) => {
  axios('/user/logout')
    .then((res) => dispatch(userLogin({})));
};
