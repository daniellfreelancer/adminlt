import React from 'react'
import { format } from 'date-fns'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'


export default function Post({_id, title, summary, cover, content,createdAt, author}) {

    TimeAgo.addDefaultLocale(en)
  return (
<div className="card mb-3" key={_id} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://exuberant-pink-angelfish.cyclic.app/${cover}`} className="img-fluid rounded-start" alt="post-img"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> {title} </h5>
        <p className="card-text">{summary}</p>
        <p className="card-text"><small className="text-body-secondary">Autor: {author?.username}</small></p>
        <time>{ format(new Date(createdAt), 'MMM d, yyyy HH:mm') }</time>
        <p className="card-text"><small className="text-body-secondary">Creado <ReactTimeAgo date={createdAt} locale="en-US"/> </small></p>
        
      </div>
      <div className='d-flex justify-content-center gap-5 my-2'>
        <button className='btn btn-secondary' >editar</button>
        <button className='btn btn-danger' >eliminar</button>
    </div>
    </div>

  </div>
</div>
  )
}
