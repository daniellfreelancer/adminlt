import React, { useState } from 'react';
import '../styles/Homepage.css'


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginAdmin(){

    }
  return (
    <div className='w-75 m-5'>
      <form className='w-100 div-form p-5' onSubmit={loginAdmin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  )
}
