import React, { useEffect, useState } from 'react';
import Mydata from '../mydata.json'; // Global JSON file containing users' data
import Post from '../Post/Post'

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username'); // Retrieve the username from localStorage
    if (!username) {
      // Redirect to login page if no user is logged in
      window.location.href = '/login'; // Or use navigate('/login') if using react-router
    } else {
      // Find the user's data based on the username
      const user = Mydata.find(user => user.username === username);
      if (user) {
        setUserData(user); // Set the user data to state
      }
    }
  }, []);

  // If user data is still loading, show a loading message
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='w-screen h-36 flex ml-20 mt-5'>
        <img
          src={userData.profilePic } // Use the user's profile pic or a default one
          alt="Profile"
          className='w-28 h-28 rounded-full'
        />
        <div className='ml-10 flex flex-col gap-5'>
          <ul className='flex gap-3 text-[14px] items-center'>
            <li>{userData.idName}</li>
            <li className='font-bold text-[11px] h-5 w-20 bg-[#f1eded] text-center rounded-md cursor-pointer'>Edit profile</li>
            <li className='font-bold text-[11px] h-5 w-24 text-center bg-[#f1eded] rounded-md cursor-pointer'>View archive</li>
            <li><i className="fa-solid fa-gear cursor-pointer"></i></li>
          </ul>
          <ul className='flex gap-5 text-[12px]'>
            <li><span className='font-bold mr-1'>{userData.post}</span>posts</li>
            <li className='cursor-pointer'><span className='font-bold mr-1'>{userData.followers}</span>followers</li>
            <li className='cursor-pointer'><span className='font-bold mr-1'>{userData.following}</span>following</li>
          </ul>
          <div className='text-[11px] font-bold'>{userData.name}</div>
        </div>
      </div>

      <div className='pt-4'></div>
      <div className='border border-gray-400'></div>
      <div>
        <Post/>
      </div>
    </div>
  );
}

export default Profile;
