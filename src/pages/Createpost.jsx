import React, { useEffect, useState } from 'react'
import Editor from '../components/Editor'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCreatePostMutation } from '../features/postBlog'
import swal from 'sweetalert2'

export default function Createpost() {

    const userAdmin = useSelector((state)=>state.auth.user)

    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")
    const [cover, setCover] = useState('')
    const [author, setAuthor] = useState("")
    const goBack = useNavigate()
    

    
    const [newPost] = useCreatePostMutation();

    useEffect(() => {
        setAuthor(userAdmin.id)
    }, [userAdmin])
    



    async function createNewPost(e){
        e.preventDefault();



        let post = {
            title: title,
            summary: summary,
            content: content,
            cover: cover,
            author: author
        }

        newPost(post)
        .then((res) =>{
          
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
            let dataSuccess = dataResponse.message
            swal.fire({
              title: "Success! ",
              text: dataSuccess,
              icon: "success",
            });
            setTimeout(()=>{
                goBack('/dashboard')
            },2000)
            
            let inputForm = document.querySelector("#form-new-post");
            inputForm.reset();
  
          }
          
        } )
        .catch((error) => {
          console.log(error);
        });



    }


  return (
   <>
   <header className='container d-flex p-5  ' >

    <button className='btn btn-info' onClick={()=>goBack('/dashboard')} >ir atras</button>

   </header>
   <main>
   <div className='container p-5'>
            <form className='w-100' onSubmit={createNewPost} id='form-new-post' >
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
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </div>

   </main>


   
   </>
  )
}
