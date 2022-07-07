import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { regUser } from '../../Redux/actions/userAction';

export default function Logup() {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(regUser(input));
    setInput({});
  }

  return (

    <div>
      <div id="log" align="center" style={{ fontSize: '24px' }}>Registration</div>
      <form onSubmit={(e) => handleSubmit(e)} id="logUp" className="g-3 needs-validation" align="center" style={{ marginTop: '100px' }}>
        <div className="col-md-4" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <label htmlFor="validationCustom01" className="form-label">Name</label>
          <input onChange={inputHandler} value={input.name || ''} name="name" type="text" className="form-control" id="validationCustom01" />
        </div>
        <br />
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
          <button className="btn btn-primary" type="submit">Register User</button>
        </div>
        <br />
        <div id="message" />
      </form>
    </div>
  );
}
