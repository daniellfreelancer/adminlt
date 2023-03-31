import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignoutMutation } from '../features/loginAPI'
import { useDispatch, useSelector } from "react-redux";
import '../styles/Dashboard.css'
import Swal from 'sweetalert2';
import { deleteCredentials } from '../features/userAPI';

export default function Adminpage() {

    const goHome = useNavigate()
    const [signoutAdmin] = useSignoutMutation();
    const dispatch = useDispatch()
    const userAdmin = useSelector((state)=>state.auth.user)


    
  const handleSignOut = (e) => {
    e.preventDefault();

    let userMail = {
      email: userAdmin.email,
    };

    signoutAdmin(userMail)
      .then((res) => {
        if (res.error) {
          let dataError = res.error;
          let dataMessage = dataError.data;

          Swal.fire({
            title: "Error!",
            text: dataMessage.message,
            icon: "error",
          });
        } else {
          let dataResponse = res.data;
          let dataSuccess = dataResponse.message;
          Swal.fire({
            title: "Bye! " + userAdmin.name,
            text: dataSuccess,
            icon: "success",
          });
          dispatch(deleteCredentials())
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
        goHome("/");
      localStorage.removeItem("token");
    }, 2500);
  };


  return (
    <>
        <header className='header-dashboard' >
            <p> {userAdmin ? userAdmin.email.toUpperCase() : ""} </p>
            <button onClick={()=>goHome('/')} className='btn btn-info' >Nuevo post</button>
            <button onClick={handleSignOut} className='btn btn-danger' >Cerrar sesión</button>
        </header>
        
    </>
  )
}
