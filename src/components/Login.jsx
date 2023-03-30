import React, { useState } from 'react';
import '../styles/Homepage.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSigninMutation } from '../features/loginAPI';
import swal from 'sweetalert2';
import { setCredentials } from '../features/userAPI';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goHome = useNavigate();
    const dispatch = useDispatch()
    const [loginReducer] = useSigninMutation();


    async function loginAdmin(e){
        e.preventDefault();

        loginReducer({email, password })
        .then((res)=>{
          if (res.error){
            let dataError = res.error
            let dataMessage = dataError.data
            swal.fire({
              title: "Error!",
              text: dataMessage.message,
              icon: "error",
            });
    
            } else {
              let dataResponse = res.data
              console.log(dataResponse)
              let dataSuccess = dataResponse.message
              dispatch(setCredentials(res?.data?.response.user))
              localStorage.setItem('token', res?.data?.response.token)
              swal.fire({
                text: dataSuccess,
                icon: "success",
              });
              let inputForm = document.querySelector("#contact");
              inputForm.reset();
              setTimeout(()=>{
                goHome('/dashboard')
              },2000)
    
              
    
            }
        }).catch((error) =>{
          console.log(error)
        })


    }
  return (
    <div className='w-75 m-5'>
      <form className='w-100 div-form p-5' onSubmit={loginAdmin} id='contact'>
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
