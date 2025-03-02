import React, { useState } from 'react';
import UserPost from '../post.json';

function Home() {
  // Add a state for likes
  const [likedPosts, setLikedPosts] = useState({});

  const username = localStorage.getItem('username')
  const myfilterdata = UserPost.filter(item => item.username === username )

  // Function to toggle like state
  const toggleLike = (id) => {
    setLikedPosts(prevState => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the like state for the specific post
    }));
  };

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col gap-5'>
        {myfilterdata.map(item => (
          <ul className='flex flex-col gap-1' key={item.id}>
            <li className='flex items-center'>
              <img src={item.dp} alt="dp" className='w-[20px] h-[20px] border rounded-full'/>
              <span className='font-bold text-xs ml-1'>{item.username}</span>
            </li>
            <li>
              <img src={item.post} alt="post" className='w-[300px] h-[400px]' />
            </li>
            <li>
              <span 
                onClick={() => toggleLike(item.id)} // Handle click event to toggle like
                className={`mr-2 text-[1rem] cursor-pointer ${likedPosts[item.id] ? 'text-red-500' : ''}`} // Apply red color when liked
              >
                <i className="fa-regular fa-heart" />
              </span>
              <span><i className="fa-regular fa-comment" /></span>
              <span className='ml-[8px]'><i className="fa-regular fa-paper-plane" /></span>
            </li>
            <li className='text-xs font-bold'>{item.like} <span>likes</span></li>
            <li className='text-[14px]'>{item.caption}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Home;
