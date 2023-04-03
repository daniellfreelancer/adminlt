import React, { useEffect } from 'react'
import Post from './Post'
import { useState } from 'react'
import axios from 'axios'
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from './Loading'
import { useSelector } from 'react-redux'

export default function Postlist() {

    const [financialPosts, setFinancialPosts] = useState([])

    const reloaded = useSelector((state)=> state.reload.reloadState)

    useEffect(() => {
        axios.get('http://localhost:4000/news/posts')
        .then((response) => {
          setFinancialPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [reloaded])
    


  return (
    <>

    {
      financialPosts.length > 0 ? (    <div>
      {
        financialPosts.length > 0 && financialPosts.map(post => {
          return (
              <Post {...post}  />
          )
        })
      }

    </div>) : <Loading/>
    }
    </>
  )
}
