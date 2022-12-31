import React, { useEffect, useState ,useReducer } from 'react'
import Posts from '../components/Posts'
import Image from 'next/image'
import hane from '../assets/hane.png'
import ImageIcon from '@mui/icons-material/Image';

import useAxiosPrivate from '../store/hooks/useAxiosPrivate';

/*
function Dashboard() {

    const [posts,setPosts] = useState([])
    
    useEffect(()=>{
      window.addEventListener('keyup',(e)=>{
        e.target.style.height = "auto";
        let scHeight = e.target.scrollHeight;
        console.log(scHeight);
        e.target.style.height = `${scHeight}px`;
        });
    
    },[])

    

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
    <div className="w-100 h-full flex flex-col items-center">
      <div className="bg-zinc-200 rounded-3xl text-zinc-900 w-[50rem] flex flex-col"> 

            <div className='flex mt-5 space-x-2 ml-3 items-center'>
            <Image src={hane} className='w-[40px] h-[40px] rounded-full'/>

            <textarea style={{"height":"40px"}} className={`rounded-3xl p-2 max-h-[330px] w-[45rem] text-white placeholder:text-white `} placeholderw-='areaheightCreate  Post' type='text'>

            </textarea>
            </div>
            <hr className="mt-3 bg-red-700"></hr>

            <div className='mt-5 text-xl justify-between flex ml-5 mb-3'>
                <div className='p-2 cursor-pointer flex items-center hover:bg-gray-500 rounded-2xl'>
                <ImageIcon sx={{fontSize:50}}/>
                <div className='text-[15px] font-bold'>Photo/Video</div>
                </div>
                <div className='flex rounded-2xl cursor-pointer items-center text-white bg-red-400 hover:bg-red-700'>
                  <div className=''>Post =</div>
                </div>
              <div/>
          
          </div>
        

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
}*/

const Dashboard = () => {

  const [username, setUsername] = useState('');
  const axios = useAxiosPrivate();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('/auth/getuser');
      setUsername(response.data.username);
    }

    console.log('i am running for some reason');
    getUser()
  }, []);

  return (
    <div className='text-black'>{username}</div>
  )
}

export default Dashboard