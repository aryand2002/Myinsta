import React, { useState } from 'react';
import MyPost from '../post.json'; // Assuming the JSON file is in the same directory
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const [selectedTab, setSelectedTab] = useState('post'); // Default is 'post'
  const navigate = useNavigate()

  // Function to filter the content based on the selected tab
  const username = localStorage.getItem('username')
  const filteredContent = MyPost.filter(item => item.title === selectedTab && item.username === username);

  function individualPost(title,username){
    const findData = MyPost.filter(item => item.title === title && item.username === username)
    navigate('/individualData',{state:findData})
  }

  return (
    <div>
      {/* Tabs for Post and Tagged */}
      <div className="pt-3  flex items-center justify-center space-x-4">
        <button
          onClick={() => setSelectedTab('post')}
          className={`font-semibold text-sm cursor-pointer ${selectedTab === 'post' ? 'text-blue-500' : ''}`}
        >
          Post
        </button>
        <button
          onClick={() => setSelectedTab('tagged')}
          className={`font-semibold text-sm cursor-pointer ${selectedTab === 'tagged' ? 'text-blue-500' : ''}`}
        >
          Tagged
        </button>
      </div>

      {/* Render content based on the selected tab */}
      <div className="pt-4 grid grid-cols-5 gap-x-[5rem] gap-y-1">
        {filteredContent.length > 0 ? (
          filteredContent.map(item => (
            <div key={item.id} className='w-[200px] h-[200px] cursor-pointer' >
              <img src={item.post} alt={item.title} className="w-[200px] h-[200px]" onClick={ () => individualPost(item.title,item.username)} />
            </div>
          ))
        ) : (
          <p>No content found</p>
        )}
      </div>
    </div>
  );
};

export default Post;
