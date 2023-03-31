import React, { useEffect } from 'react'
import Post from './Post'
import { useState } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from './Loading'

export default function Postlist() {

    const [financialPosts, setFinancialPosts] = useState([])

    useEffect(() => {
        axios.get('https://exuberant-pink-angelfish.cyclic.app/post')
        .then((response) => {
          console.log(response.data);
          setFinancialPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])
    


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
