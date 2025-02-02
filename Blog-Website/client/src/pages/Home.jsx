import React, { useEffect,useState } from 'react'
import CallToAction from '../components/CallToAction'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'

const Home = () => {
  const [posts,setPosts] = useState([])

  useEffect(()=>{

  const fetchPosts = async() =>{
    const res = await fetch('/api/post/getposts')
    const data = await res.json()
    setPosts(data.posts)
  }
  fetchPosts()

  },[])


  return (
    <div className='h-full flex flex-col gap-6 p-28 mx-auto'>
      <div className="">
      <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
      <p className='text-gray-500 text-sm mt-[1.5rem]'>Here you'll find a variety of articles and tutorials on topics such as web development, software engineering and programming languages.</p>
      <Link to='/search' className='text-xs text-teal-500 font-bold hover:underline'>View All Posts</Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction/>
      </div>
      
      <h2 className='text-3xl dark:text-blue-500 underline font-bold text-center'>Blogify</h2>

      <div className="mx-auto p-3 flex flex-col gap-8 py-7">
        {
          posts && posts.length > 0 && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4">
                {
                  posts.map((post)=>{
                    <PostCard key={post._id} post={post}/>
                  })
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home
