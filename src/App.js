import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './Registration/Registration';
import MainPage from './Main/MainPage';
import Profile from './Profile/Profile';
import Login from './Login/Login'; // Assuming you have a Reels component
import Post from './Post/Post'
import Home from './Home/Home'
import IndividualData from "./IndividualPost/IndividualData";

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout for logged-in users */}
        <Route 
          path="/" 
          element={loggedIn ? <MainPage /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        >
          {/* Nested routes for content */}
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="post" element={<Post />} />
        </Route>
        <Route path="individualData" element={<IndividualData/>}/>

        {/* Registration route */}
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
