import React from 'react'
import { format } from 'date-fns'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import imgLiving from '../assets/fondoHome.png'
import swal from 'sweetalert2'

import en from 'javascript-time-ago/locale/en.json'
import { useDeletePostMutation } from '../features/postBlog'
import { reload } from '../features/reloadSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
TimeAgo.addDefaultLocale(en)

export default function Post(props) {


  const [deletePost] = useDeletePostMutation();
  const dispatch = useDispatch()


  function handleDeletePost(id){
    let post = {
      id:id
    }

    deletePost(post).then((res) => {
      if (res.error) {
        let dataError = res.error;
        let dataMessage = dataError.data;
        swal.fire({
          title: "Error!",
          text: dataMessage.message,
          icon: "error",
        })
      } else {
        let dataResponse = res.data;
        let dataSuccess = dataResponse.message;
        swal.fire({
          title: "Success! ",
          text: dataSuccess,
          icon: "success",
        });
        dispatch(reload())
      }
    })
    .catch((error)=> console.log(error))
  }

    
  return (
<div className="card mb-3" >
  <div className="row g-0" key={props._id} >
    <div className="col-md-4">
      <img src={props?.cover ? props?.cover : imgLiving} className="img-fluid rounded-start" alt="post-img"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> {props.title} </h5>
        <p className="card-text">{props.summary}</p>
        <p className="card-text"><small className="text-body-secondary">Autor: {props.author?.name}</small></p>
        <time>{ format(new Date(props.createdAt), 'MMM d, yyyy HH:mm') }</time>
        <p className="card-text"><small className="text-body-secondary">Creado <ReactTimeAgo date={props.createdAt} locale="en-US"/> </small></p>
        
      </div>
      <div className='d-flex justify-content-center gap-5 my-2'>
        <Link className='btn btn-secondary' to={`/editpost/${props._id}`} >editar</Link>
        <button className='btn btn-danger' onClick={()=>handleDeletePost(props._id)} >eliminar</button>
    </div>
    </div>

  </div>
</div>
  )
}
