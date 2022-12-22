import React, { useEffect, useState ,useReducer } from 'react'
import Posts from '../components/Posts'
import axios from 'axios'


function Dashboard() {

    const [posts,setPosts] = useState([])
//   const postsReducer = (state,action) =>{
//     switch (action.type){
//         case "SET_POSTS":
//             return {
//                 posts : action.payload
//             }
//         case "CRETAE_POSTS":
//             return {
//                 posts: [action.payload,...state.posts ]
//             }
//             default:
//                 return state
//     }
// }
  
//   const [posts ,dispatch] = useReducer(postsReducer,
//     [])


  const getUserPosts = async (start = 0) => {
    const data = {
      start: start
    }

    const response = await axios.get('/posts/getposts', data)
    

     setPosts(response.data.posts)
  
  }
  
    useEffect(() => {

      getUserPosts()
      console.log(posts)

    }, [])

  return (
    <div className="w-100 h-full">
      <div className="bg-gray-500"> 
      

      </div>

        <div className="bg-red text-center flex flex-col items-center text-black">
                
                {posts && posts.map((post)=>(
                  <Posts key={post.id} id={post.id} title={post.title} content={post.content} created_at={post.created_at} author={post.author}/>
                )
                )
                }
        </div>


    </div>
  )
}

export default Dashboard