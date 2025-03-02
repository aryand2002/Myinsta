import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Mydata from '../mydata.json'; // Assuming you have a local JSON file with user data

function Login({ setIsLoggedIn }) {
  const [users, setUsers] = useState(Mydata);  // Assuming `Mydata` contains an array of users
  const navigate = useNavigate();

  const fileSubmit = (values) => {
    const { username, pswd } = values;
    
    // Check if the input username and password match any user data
    const user = users.find(user => user.username === username && user.password === pswd);

    if (user) {
      // If login is successful, store the username in localStorage
      localStorage.setItem('username', user.username);
      localStorage.setItem('password', user.password);

      message.success('Login successful!');
      setIsLoggedIn(true);
      navigate('/'); // Navigate to home or any other page
    } else {
      message.error('Username or password is incorrect.');
    }
  };

  return (
    <>
      <div className='w-screen flex justify-center items-center h-screen flex-col gap-4'>
        <Form 
          className='border-solid border border-[#bcbcba] h-3/7 w-64 px-5 py-5 flex flex-col items-center justify-center' 
          onFinish={fileSubmit}
        >
          <h1 className='mb-5 font-bold text-base'>INSTAGRAM</h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input className='w-52 h-7 text-[11px]' placeholder='Phone number, username, or email' />
          </Form.Item>

          <Form.Item
            name="pswd"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password className='w-52 h-7 text-[11px]' placeholder='Password' />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className='-ml-6'>
              Log in
            </Button>
          </Form.Item>
        </Form>

        <div className='border-solid border border-[#bcbcba] w-64 h-[40px] flex justify-center items-center text-[12px]'>
          <p>Don't have an account? <span className='text-blue-600 font-bold cursor-pointer'><Link to='/Registration'>Sign up</Link></span> </p>
        </div>
      </div>
    </>
  );
}

export default Login;
