import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../components/Editor'
import { useGetPostByIdMutation, useUpdatePostMutation } from '../features/postBlog';
import swal from 'sweetalert2'

export default function Editpost() {

    const {id} = useParams();
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")
    const [cover, setCover] = useState('')
    const goBack = useNavigate()
    const [getPost] = useGetPostByIdMutation()
    const [editPost] = useUpdatePostMutation();


    async function handleUpdatePost (e) {
        e.preventDefault();

        let editedPost = {
            title: title,
            summary:summary,
            cover: cover,
            content: content,
            id: id
        }


        await editPost(editedPost).then((res) => {
            console.log(res)
            if (res.error) {
                let dataError = res.error;
                let dataMessage = dataError.data;
                swal.fire({
                    title: "Error!",
                    text: dataMessage.message,
                    icon: "error",
                });
            } else {
                let dataResponse = res.data;
                let dataSuccess = dataResponse.message;
                swal.fire({
                    title: "Success! ",
                    text: dataSuccess,
                    icon: "success",
                });
                let inputForm = document.querySelector("#form-editpost");
                inputForm.reset();
                setTimeout(()=>{
                    goBack('/dashboard')
                },2500)
            }
        }).catch((error) => console.log(error))


    }


    async function getPostByID(id){
        try {
            let res = await getPost(id);
            if (res.data){
                setTitle(res.data.title)
                setSummary(res.data.summary)
                setCover(res.data.cover)
                setContent(res.data.content)
            } else {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getPostByID(id)
// eslint-disable-next-line
    },[id])
    

  return (
    <>
    <header className='container d-flex p-5  ' >
 
     <button className='btn btn-info' onClick={()=>goBack('/dashboard')} >ir atras</button>
 
    </header>
    <main>
    <div className='container p-5'>
             <form className='w-100'  id='form-editpost' onSubmit={handleUpdatePost} >
                 <div className="mb-3">
                     <label 
                     htmlFor="title" 
                     className="form-label">Titulo</label>
                     <input 
                     type="title" 
                     className="form-control" 
                     id="title" 
                     aria-describedby="title" 
                     placeholder='Aqui va el titulo' 
                     value={title} 
                     onChange={(e)=>setTitle(e.target.value)}/>
                 </div>
                 <div className="mb-3">
                     <label 
                     htmlFor="title" 
                     className="form-label">Resumen</label>
                     <input 
                     type="summary" 
                     className="form-control" 
                     id="summary" 
                     aria-describedby="summary" 
                     placeholder='Aqui va el resumen' 
                     value={summary} 
                     onChange={(e)=>setSummary(e.target.value)} />
                 </div>
                 <div className="mb-3">
                     <label 
                     htmlFor="cover" 
                     className="form-label">Foto</label>
                     <input 
                     type="text" 
                     className="form-control" 
                     id="cover" 
                     aria-describedby="cover"
                     placeholder='url de imagen de post'
                     value={cover}
                     onChange={(e)=>setCover(e.target.value)}/>
                 </div>
                 <Editor value={content} onChange={setContent} />
                 <button type="submit" className="btn btn-success">Actualizar</button>
             </form>
         </div>
 
    </main>
 
 
    
    </>
  )
}
