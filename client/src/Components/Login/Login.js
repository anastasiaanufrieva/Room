import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { valUser } from '../../Redux/actions/userAction';

export default function Login() {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(valUser(input));
    setInput({});
  }
  return (
    <div>
      <div id="log" align="center" style={{ fontSize: '24px' }}>Authorization</div>
      <form onSubmit={(e) => handleSubmit(e)} id="logIn" className="g-3 needs-validation" align="center" style={{ marginTop: '100px' }}>
        <div className="col-md-4" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <label htmlFor="validationCustom02" className="form-label">Email</label>
          <input onChange={inputHandler} value={input.email || ''} name="email" type="text" className="form-control" id="validationCustom02" />
        </div>
        <br />
        <div className="col-md-4" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <label htmlFor="validationCustom02" className="form-label">Password</label>
          <input onChange={inputHandler} value={input.password || ''} name="password" type="password" className="form-control" id="validationCustom03" />
        </div>
        <br />
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
        <br />
        <div id="message" />
      </form>
    </div>
  );
}
